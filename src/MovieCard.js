import React, { Component } from 'react';
import axios from 'axios';
class MovieCard extends React.Component {

    //i set the state of movieData to be an empty object 
    // by default in order to avoid getting any errors
    //  as we are trying to access its properties in the render method.
    //   Without doing so, movieData would be undefined and it will 
    //   trigger an error.
    state = {
        movieData: {}
    };

    


    // in this method Axios.get() will return a promise containing the
    //  response or the information requested
    //. After that, by calling the setState method 
    //  we save the response into movieData.
    //  very important to note before you can  successfully call
    //   the API endpoint you'll need an apikey.
    //  You can get one from the OMDb website.
    ApiCallingMethod() {
        axios
            .get(
                `https://www.omdbapi.com/?apikey=${"bab92e68"}&i=${
                    this.props.movieID
                }&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                this.setState({ movieData: res });
            });
    }

    render() {
        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating
        } = this.state.movieData;

        // If Poster doesn't have a value or if it's value is N/A 
        // we return null. This will ensure that in this case the
        //  MovieCard will not display anythin

        if (!Poster || Poster === 'N/A') {
            return null;
        }

        return (
            <>
            <div className="results">
                <div className="image-container">
                <img src={Poster} alt='' />
                </div>
                <div className="movie-info">
                    <h2>Movie Details</h2>
                    <div>
                        <h1>{Title}</h1>
                        <small>Released Date: {Released}</small>
                    </div>
                    <h4>Rating: {imdbRating} / 10</h4>

                    {/* In this  Instead of showing the entire Plot, I decided to only 
                    allow a maximum of 350 characters. That is why I used .
                    substring(0, 350) on it. */}
                    <p>{Plot && Plot.substr(0, 350)}</p>
                    <div className="tags-container">

                    {/* the Genre is a string which contains a comma separated
                     list of all the genres. We split() the Genre string using 
                     a comma and a space: ', '. This will return an array that
                      can be mapped and converted into an array of individual 
                      <span> tags containing the corresponding genre. */}
                        {Genre &&
                            Genre.split(', ').map(g => (
                                <span key={g}>{g}</span>
                            ))}
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default MovieCard;