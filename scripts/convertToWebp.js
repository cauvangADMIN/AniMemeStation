const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to your memes folder
const memesFolder = path.join(__dirname, '..', 'assets/images/meme');
const outputFolder = memesFolder; // Save in the same folder

console.log(`Looking for JPG files in: ${memesFolder}`);

// Create meme folder if it doesn't exist
if (!fs.existsSync(memesFolder)) {
  console.log(`Meme folder doesn't exist. Creating it now...`);
  fs.mkdirSync(memesFolder, { recursive: true });
}

// Create output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Get all jpg files
const jpgFiles = fs.readdirSync(memesFolder).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${jpgFiles.length} JPG files to convert`);

if (jpgFiles.length === 0) {
  console.log('No JPG files found. Please add some JPG files to the meme folder.');
} else {
  // Convert each file
  jpgFiles.forEach(file => {
    const inputPath = path.join(memesFolder, file);
    const outputPath = path.join(outputFolder, `${path.parse(file).name}.webp`);
    
    sharp(inputPath)
      .webp({ quality: 80 }) // Adjust quality as needed (0-100)
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file} -> ${path.parse(file).name}.webp`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  });
}