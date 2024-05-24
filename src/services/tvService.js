const TVShow = require("../models/TVShow");

const createTVShow = async (tvData) => {
  try {
    const tvShow = await TVShow.create(tvData);
    return tvShow;
  } catch (error) {
    throw error;
  }
};

const getAllTVShows = async (userId) => {
  try {
    const tvShows = await TVShow.find({ userId: userId });
    return tvShows;
  } catch (error) {
    throw error;
  }
};

const limitTVShows = async (page, limit) => {
  try {
    const totalPosts = TVShow.countDocuments();
    const totalPages = Math.ceil(totalPosts / limit);

    if (page > totalPages){
      throw new Error("Page Not Found!")
    }
    let skip = (page - 1) * limit;

    const shows = await TVShow.find().skip(skip).limit(limit).exec();

    return shows;
  } catch (error) {
    throw error;
  }
};

const deleteTVShow = async (showId, userId) => {
  try {
    const tvShow = await TVShow.findOneAndDelete({
      _id: showId,
      userId: userId,
    });
    return tvShow;
  } catch (error) {
    throw error;
  }
};

module.exports = { createTVShow, getAllTVShows, limitTVShows, deleteTVShow };
