const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { name: "John", age: 3 },
    { name: "Asha", age: 5 },
    { name: "Kiran", age: 2 }
  ]);
});

module.exports = router;
