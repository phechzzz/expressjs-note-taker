const { v4: uuidv4 } = require('uuid');

// Function to generate a new UUID (v4)
const generateUUID = () => {
  return uuidv4();
};

module.exports = generateUUID;