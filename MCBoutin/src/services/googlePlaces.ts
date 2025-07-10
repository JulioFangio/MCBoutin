// Service pour récupérer les avis Google Places via endpoint local
// Utilise la nouvelle API Places avec PLACE_ID spécifique
import axios from 'axios';

interface FormattedReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  initial: string;
  profilePhoto?: string;
}

interface BusinessInfo {
  name: string;
  address: string;
  rating: number;
  totalReviews: number;
}

interface GoogleReviewsResponse {
  success: boolean;
  businessInfo: BusinessInfo;
  reviews: FormattedReview[];
  error?: string;
  message?: string;
}

class GooglePlacesService {
  private baseUrl: string;

  constructor(apiKey?: string) {
    // Utilisation de l'endpoint local GET simple
    this.baseUrl = typeof window !== 'undefined' 
      ? `${window.location.origin}/api/google-reviews`
      : '/api/google-reviews';
  }

  /**
   * Récupère les avis d'un établissement via l'endpoint local
   * Plus besoin de paramètres, tout est configuré dans .env
   */
  async getReviews(businessName?: string, address?: string): Promise<{
    businessInfo: BusinessInfo;
    reviews: FormattedReview[];
  } | null> {
    try {
      const response = await axios.get<GoogleReviewsResponse>(this.baseUrl);

      if (response.data.success) {
        return {
          businessInfo: response.data.businessInfo,
          reviews: response.data.reviews,
        };
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
}

export default GooglePlacesService;
