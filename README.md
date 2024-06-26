# STAGE.IN-backend

## OTT Platform
This is a RESTful API which is used for managing an OTT platform which allows users to save their favorite movies and TV Shows to a personalised list. This feature requires backend services like NodeJS, ExpressJS and MongoDB for managing the user's list, including adding, removing, and listing saved items.

## Technologies Used
*  **Node.js**: Runtime environment for the backend.
* **Express**: Framework used to build the API.
* **MongoDB**: Database to store task data.
* **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
* **Render**: Hosting platform where the API is deployed.

## Testing Framework
 **POSTMAN**

## API Endpoints
Below are the available routes within this API:

* ### REGISTER USER
    **POST**  `/api/users/register`
     
     * Used to create a new user provided with username, preferences and watchHistory

     * ### BODY
      {
      "username" : Give any username here
      "preferences" : {
        "favoriteGenres" : Give any genre out of Action,Comedy,Drama,Fantacy,Horror,Romance and SciFi
      }, 
      "dislikedGenres" : Give any genre out of Action,Comedy,Drama,Fantacy,Horror,Romance and SciFi
      }


*  ### LOGIN USER
     **POST** `/api/users/login`

     * Used to login an already registerd user provided with username

     * ### BODY
             {
                "username" : "Give the already registered username"
             }

* ### Create a Movie
   **POST**  `/api/movies`

   * Used to create a movie for Logged In users
   * We have to enter the token in the Authrorization key of the Header section in Postman.

            {
              Authorization : Bearer token
            }

   * ### BODY
            {
              "title" : Give a movie title,

              "description" : Give specific description of the movie 
              mentioned,

              "genres" : Give a movie genre out of Action, Comedy, Drama, Fantacy, Horror, Romance, SciFi,

              "releaseDate" : Provide the date on which the movie was released in the format of DD/MM/YYYY.

              "director" : Give the name of the Director of the movie.

              "actors" : Give the names of all the actors working in that movie

            }

* ### List All Movies
   **GET** `/api/movies`

   * Retrieves all the movies stored in the database for a particular User.
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }

* ### List certain number of movies on a certain page

   **GET** `/api/movies/paginate?page=Number&limit=Number`

   * Retrieve certain amount of movies on certain Page Number that is Pagination
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }

* ### Delete a Movie
   **DELETE** `/api/movies/:id`

   * Deletes a Movie with a specific ID.
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }


* ### Create a TV Show
   **POST**  `/api/tv`

   * Used to create a TV Show for Logged In users
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }

   * ### BODY
            {
              "title" : Give a movie title,

              "description" : Give specific description of the movie 
              mentioned,

              "genres" : Give a movie genre out of Action, Comedy, Drama, Fantacy, Horror, Romance, SciFi,

              "episodes" : {

              "episodeNumber" : Type an Episode Number.

              "seasonNumber" : Type a Season Number

              "releaseDate" : Provide the date on which the movie was released in the format of DD/MM/YYYY.

              "director" : Give the name of the Director of the movie.

              "actors" : Give the names of all the actors working in that movie
              }



            }

* ### List All TV Shows
   **GET** `/api/tv`

   * Retrieves all the TV Shows stored in the database for a particular User.
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }

* ### List certain number of TV Shows on a certain page

   **GET** `/api/tv/paginate?page=Number&limit=Number`

   * Retrieve certain amount of TV Shows on certain Page Number that is Pagination
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }

* ### Delete a Movie
   **DELETE** `/api/tv/:id`

   * Deletes a Movie with a specific ID.
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }


## Deployment

URL - https://stage-in-backend.onrender.com