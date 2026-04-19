const fs = require('fs');

try {
  const content = fs.readFileSync('message.txt', 'utf8');
  console.log(content);
} catch (error) {
  console.error('Error reading the file:', error.message);
}