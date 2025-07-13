import { execSync } from 'child_process';
import { existsSync } from 'fs';

console.log('🎬 Optimisation automatique de la vidéo GIFMCB.mp4');

// Vérifier si ffmpeg est installé
try {
  execSync('ffmpeg -version', { stdio: 'pipe' });
  console.log('✅ FFmpeg détecté, optimisation en cours...');
  
  const inputFile = 'public/GIFMCB.mp4';
  const outputFile = 'public/GIFMCB-optimized.mp4';
  
  if (!existsSync(inputFile)) {
    console.log('❌ Fichier GIFMCB.mp4 non trouvé dans public/');
    process.exit(1);
  }
  
  console.log('🔄 Compression en cours (cela peut prendre quelques minutes)...');
  
  // Compression optimisée pour le web
  execSync(`ffmpeg -i "${inputFile}" -vcodec libx264 -crf 28 -preset fast -movflags +faststart "${outputFile}" -y`, {
    stdio: 'inherit'
  });
  
  console.log('✅ Vidéo optimisée créée : GIFMCB-optimized.mp4');
  console.log('📊 Maintenant, modifiez IntroScreen.tsx pour utiliser la version optimisée');
  
} catch (error) {
  console.log('❌ FFmpeg non installé ou erreur lors de l\'optimisation');
  console.log('');
  console.log('📋 Installez FFmpeg puis relancez ce script, ou utilisez ces commandes manuellement :');
  console.log('');
  console.log('1. Compression recommandée :');
  console.log('   ffmpeg -i public/GIFMCB.mp4 -vcodec libx264 -crf 28 -preset fast -movflags +faststart public/GIFMCB-optimized.mp4');
  console.log('');
  console.log('2. Compression plus agressive :');
  console.log('   ffmpeg -i public/GIFMCB.mp4 -vcodec libx264 -crf 35 -preset ultrafast -vf "scale=1280:720" public/GIFMCB-compressed.mp4');
  console.log('');
  console.log('📊 Taille actuelle : 14.9 MB → Taille après optimisation : ~2-4 MB');
}
