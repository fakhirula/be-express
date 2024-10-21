const express = require("express");
const router = express.Router();

const MoviesController = require('../controllers/MoviesController');

router.get("/", (req, res) => {
  res.send("Hello Express");
});

// endpoint
router.get('/movies', MoviesController.index);

router.get('/movies/:id', MoviesController.show);

router.post('/movies', (req, res) => {
  res.send('Mendapatkan POST request')
})

router.put('/movies/:id', (req, res) => {
  res.send('Mendapatkan PUT request di /movies')
})

router.delete('/movies/:id', (req, res) => {
  res.send('Mendapatkan DELETE request di /movies')
})


// export
module.exports = router;