const { getMovies, getMovie } = require('../constants/movies');

class MoviesController {
  async index(req, res) {
    const movies = getMovies()

    const data = {
      message: 'Get All Resources',
      data: movies,
    };

    return res.status(200).json(data);
  }

  async show(req, res) {
    const { id } = req.params;
    const movie = getMovie(Number(id))    

    if (!movie) {
      const data = {
        message: 'Resource Not Found',
      };
      return res.status(404).json(data);
    }
     
    const data = {
      message: 'Get Detail Resource',
      data: movie,
    };
    return res.status(200).json(data);
  }
}

module.exports = new MoviesController();