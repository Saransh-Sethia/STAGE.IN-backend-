const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const preferenceSchema = new mongoose.Schema({
    favoriteGenres : {
        type: String,
        required: true,
        enum : [        
        "Action",
        "Comedy",
        "Drama",
        "Fantacy",
        "Horror",
        "Romance",
        "SciFi",]
    },
    default : "Action"
},);

const watchHistorySchema = new mongoose.Schema({
    watchedOn: {
        type: Date,
    },
    rating: {
        type: Number
    }

}, {
    _id : true
})

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    preferences : {
        type : preferenceSchema,
    },
    watchHistory : {
        type : watchHistorySchema
    }

}, {
    timestamps : true
});

const User = mongoose.model("User",userSchema);

module.exports = User;