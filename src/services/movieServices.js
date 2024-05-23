const Movie = require("../models/Movie");

const createMovie = async (movieData) => {
  try {
    const movie = await Movie.create(movieData);
    return movie;
  } catch (error) {
    throw error;
  }
};

const getAllMovies = async (userId) => {
  try {
    const movies = await Movie.find({ userId: userId });
    return movies;
  } catch (error) {
    throw error;
  }
};

const deleteMovie = async (movieId, userId) => {
  try {
    const movie = await Movie.findOneAndDelete({
      _id: movieId,
      userId: userId,
    });
    return movie;
  } catch (error) {
    throw error;
  }
};

module.exports = { createMovie, getAllMovies, deleteMovie };
