// Optimisation vidéo avec ffmpeg
// Commandes à exécuter pour optimiser GIFMCB.mp4

console.log('🎬 Optimisation de la vidéo GIFMCB.mp4');
console.log('');
console.log('Pour optimiser la vidéo, installez ffmpeg et exécutez :');
console.log('');
console.log('1. Compression basique (réduction 70%) :');
console.log('   ffmpeg -i public/GIFMCB.mp4 -vcodec libx264 -crf 28 -preset fast public/GIFMCB-optimized.mp4');
console.log('');
console.log('2. Compression agressive (réduction 85%) :');
console.log('   ffmpeg -i public/GIFMCB.mp4 -vcodec libx264 -crf 35 -preset ultrafast -vf "scale=1280:720" public/GIFMCB-compressed.mp4');
console.log('');
console.log('3. Format WebM (meilleure compression) :');
console.log('   ffmpeg -i public/GIFMCB.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 public/GIFMCB.webm');
console.log('');
console.log('📊 Taille actuelle : 14.9 MB');
console.log('📊 Taille après optimisation : ~2-4 MB');
