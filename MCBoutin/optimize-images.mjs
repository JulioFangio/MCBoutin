import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = [
  'forme1.png',
  'forme2.png',
  'forme3.png'
];

const publicDir = join(__dirname, 'public');

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  for (const imageName of images) {
    const inputPath = join(publicDir, imageName);
    const outputPath = join(publicDir, imageName.replace('.png', '-min.png'));
    
    try {
      // Augmenter la limite de pixels pour les grandes images
      const image = sharp(inputPath, { limitInputPixels: false });
      
      await image
        .resize(800, 600, { 
          fit: 'cover',
          withoutEnlargement: true 
        })
        .png({ 
          quality: 80,
          compressionLevel: 9
        })
        .toFile(outputPath);
      
      console.log(`✓ Optimized ${imageName} -> ${imageName.replace('.png', '-min.png')}`);
    } catch (error) {
      console.error(`✗ Error optimizing ${imageName}:`, error.message);
    }
  }
  
  console.log('Image optimization completed!');
}

optimizeImages();
