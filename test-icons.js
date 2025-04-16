const fs = require('fs');
const path = require('path');

// Location of the react-icons package
const siDirectory = path.join(__dirname, 'node_modules', 'react-icons', 'si');

try {
  // Read the directory to list available icons
  fs.readdir(siDirectory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    
    // Filter for Amazon-related icon files
    const amazonIcons = files
      .filter(file => file.toLowerCase().includes('amazon') || file.toLowerCase().includes('aws'))
      .map(file => file.replace('.js', ''));
    
    console.log('Available Amazon/AWS icons:', amazonIcons);
  });
} catch (error) {
  console.error('Error:', error);
}