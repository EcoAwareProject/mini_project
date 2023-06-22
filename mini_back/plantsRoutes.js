const express = require('express');
const router = express.Router();
const Plant = require('./model/invasive');

// GET /api/plants
router.post('/', (req, res) => {
    // Fetch prediction and confidence values from the API response
    const { prediction} = req.body;
  
    // Query the database (Plant collection) for matching documents based on prediction and confidence values
    Plant.find({ prediction })
      .then((plantDocuments) => {
        // Extract the relevant information from the plantDocuments
        const plantData = plantDocuments.map((plant) => ({
          prediction: plant.prediction,
        //   plantName: String,
        //   plantDesc: String
          // Add other fields from the Plant collection as needed
        }));
  
        res.json(plantData);
      })
      .catch((error) => {
        console.error('Error querying the database:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });
module.exports = router;
