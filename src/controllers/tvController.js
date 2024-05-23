const tvService = require("../services/tvService");

const createTVShow = async (req, res) => {
  try {
    const { title, description, genres, episodes } = req.body;
    const userId = req.user.id;

    const tvShow = await tvService.createTVShow({
      title,
      description,
      genres,
      episodes,
      userId,
    });

    console.log("TV Show Created", tvShow);
    res.status(201).json(tvShow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTVShows = async (req, res) => {
  try {
    const userId = req.user.id;
    const tvShows = await tvService.getAllTVShows(userId);
    res.status(200).json(tvShows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTVShow = async(req, res) => {
    try{
const {id} = req.params;
const userId = req.user.id;
const success = await tvService.deleteTVShow(id, userId);
if(!success){
    res.status(404).json({message: "Shoe Not Found"})
};

res.status(204).send();
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = { createTVShow, getAllTVShows, deleteTVShow };
