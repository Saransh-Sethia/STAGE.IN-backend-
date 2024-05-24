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

const limitMovies = async (page, limit) => {
  try {
    const totalPosts = Movie.countDocuments();
    const totalPages = Math.ceil(totalPosts / limit);

    if (page > totalPages){
      throw new Error("Page Not Found!")
    }
    let skip = (page - 1) * limit;

    const movies = await Movie.find().skip(skip).limit(limit).exec();

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

module.exports = { createMovie, getAllMovies, deleteMovie, limitMovies };
