const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    genres: {
            type: String,
            enum : ["Action","Comedy","Drama","Fantacy","Horror","Romance","SciFi"],
            required: true
        },
    releaseDate: {
            type: Date,
            default: Date.now()
        },
    director: {
            type: String,
            required: true
        },
    actors: {
            type:[String],
            required: true
        },
    userId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        }

},{
    timestamps: true,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie