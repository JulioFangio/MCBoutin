// API endpoint pour récupérer les avis Google Places (nouvelle version)
// Utilise l'API Places (NEW) avec un PLACE_ID spécifique
import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async ({ request, url }) => {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.PLACE_ID;
  const fields = import.meta.env.FIELDS;
  const languageCode = import.meta.env.LANGUAGE_CODE;

  // Vérifications
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'API key not configured' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  if (!placeId) {
    return new Response(
      JSON.stringify({ error: 'Place ID not configured' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    // Appel à l'API Places (NEW) avec le PLACE_ID
    const placeUrl = `https://places.googleapis.com/v1/places/${placeId}`;
    
    const response = await axios.get(placeUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': fields || 'displayName,rating,userRatingCount,reviews,formattedAddress'
      },
      params: {
        languageCode: languageCode || 'fr'
      }
    });

    if (!response.data) {
      return new Response(
        JSON.stringify({ 
          error: 'No data received',
          message: 'Aucune donnée reçue de l\'API Google Places'
        }),
        { 
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const place = response.data;

    // Formatage des avis
    const formattedReviews = (place.reviews || []).map((review: any, index: number) => ({
      id: `google-review-${index}`,
      author: review.authorAttribution?.displayName || 'Anonyme',
      rating: review.rating || 5,
      text: review.text?.text || review.text || 'Avis sans texte',
      date: review.relativePublishTimeDescription || 'Date inconnue',
      initial: (review.authorAttribution?.displayName || 'A').charAt(0).toUpperCase(),
      profilePhoto: review.authorAttribution?.photoUri,
    }));

    const businessInfo = {
      name: place.displayName?.text || place.displayName || 'Marie-Christine BOUTIN',
      address: place.formattedAddress || '134 Rue du Croissant, 44300 Nantes',
      rating: place.rating || 5.0,
      totalReviews: place.userRatingCount || 0,
    };

    return new Response(
      JSON.stringify({
        success: true,
        businessInfo,
        reviews: formattedReviews,
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

export const POST: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({ 
      error: 'Method not allowed',
      message: 'This endpoint uses GET method only'
    }),
    { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};
