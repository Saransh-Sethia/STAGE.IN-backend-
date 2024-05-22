const mongoose = require("mongoose");

const episodesSchema = new mongoose.Schema(
  {
    episodeNumber: {
      type: Number,
      default:0,
    },
    seasonNumber: {
      type: Number,
      default:0
    },
    releaseDate: {
      type: Date,
    },
    director: {
      type: String,
    },
    actors: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const tvShowSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genres: {
      type: String,
      enum: [
        "Action",
        "Comedy",
        "Drama",
        "Fantacy",
        "Horror",
        "Romance",
        "SciFi",
      ],
      required: true,
      default: "Action"
    },
    episodes: {
      type: episodesSchema,
      default: {},
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const TVShow = mongoose.model("TVShow", tvShowSchema);

module.exports = TVShow;
