const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to your memes folder
const memesFolder = path.join(__dirname, '..', 'assets/images/meme');
const cosplayFolder = path.join(__dirname, '..', 'assets/images/cosplay');
const image2DFolder = path.join(__dirname, '..', 'assets/images/2D');
const outputFolder = memesFolder; // Save in the same folder
const outputFolderCosplay = cosplayFolder; // Save in the same folder
const outputFolderImage2D = image2DFolder; // Save in the same folder

console.log(`Looking for JPG files in: ${memesFolder}`);
console.log(`Looking for JPG files in: ${cosplayFolder}`);
console.log(`Looking for JPG files in: ${image2DFolder}`);

// Create meme folder if it doesn't exist
// if (!fs.existsSync(memesFolder)) {
//   console.log(`Meme folder doesn't exist. Creating it now...`);
//   fs.mkdirSync(memesFolder, { recursive: true });
// }

// Create cosplay folder if it doesn't exist
// if (!fs.existsSync(cosplayFolder)) {
//   console.log(`Meme folder doesn't exist. Creating it now...`);
//   fs.mkdirSync(cosplayFolder, { recursive: true });
// }

// Create output folder if it doesn't exist
// if (!fs.existsSync(outputFolder)) {
//   fs.mkdirSync(outputFolder, { recursive: true });
// }

// Create output folder if it doesn't exist
// if (!fs.existsSync(cosplayFolder)) {
//   fs.mkdirSync(cosplayFolder, { recursive: true });
// }

// Get all jpg files in Meme folder
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

// Get all jpg files in Cosplay folder
const jpgCosplayFiles = fs.readdirSync(cosplayFolder).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${jpgCosplayFiles.length} JPG files to convert`);

if (jpgCosplayFiles.length === 0) {
  console.log('No JPG files found. Please add some JPG files to the cosplay folder.');
} else {
  // Convert each file
  jpgCosplayFiles.forEach(file => {
    const inputPath = path.join(cosplayFolder, file);
    const outputPath = path.join(outputFolderCosplay, `${path.parse(file).name}.webp`);
    
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

// Get all jpg files in 2D folder
const jpg2DFiles = fs.readdirSync(image2DFolder).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${jpg2DFiles.length} JPG files to convert`);

if (jpg2DFiles.length === 0) {
  console.log('No JPG files found. Please add some JPG files to the 2D folder.');
} else {
  // Convert each file
  jpg2DFiles.forEach(file => {
    const inputPath = path.join(image2DFolder, file);
    const outputPath = path.join(outputFolderImage2D, `${path.parse(file).name}.webp`);
    
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