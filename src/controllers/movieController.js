const movieService = require("../services/movieServices");

const createMovie = async (req, res) => {
  try {
    const { title, description, genres, releaseDate, director, actors } =
      req.body;

    const userId = req.user.id;

    const movie = await movieService.createMovie({
      title,
      description,
      genres,
      releaseDate,
      director,
      actors,
      userId,
    });

    console.log("Movie Created", movie);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const userId = req.user.id;
    const movies = await movieService.getAllMovies(userId);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const limitMovies = async(req,res) => {
  try{
let page = Number(req.query.page) || 1;
let limit = Number(req.query.limit) || 2;

const movies = await movieService.limitMovies(page, limit);
res.status(200).json(movies);
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

const deleteMovie = async(req,res) => {
    try{
const {id} = req.params;
const userId = req.user.id;

const success = await movieService.deleteMovie(id, userId);

if(!success){
    res.status(404).json({message: "Movie Not Found"})
};
res.status(204).send();
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = { createMovie, getAllMovies, deleteMovie, limitMovies };
