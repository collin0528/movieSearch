import React, { Component } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
class Movieslist extends React.Component {
    state = {

            loading: false,
        moviesList: ['tt2294629'],
        searchTerm: ''
    };

    search = event => {
        
        event.preventDefault();
        axios
            .get(
        
                `https://www.omdbapi.com/?apikey=${"bab92e68"}&s=${
                    this.state.searchTerm
                }&plot=full`
                
            )
            .then(res => res.data)
            .then(res => {
                if (!res.Search) {
                    this.setState({ moviesList: [] });
                    return;
                }

                const moviesList = res.Search.map(movie => movie.imdbID);
                this.setState({
                    moviesList
                });
            });
    };


    LoaderMethod = () => {
        if (!this.state.loading) {
          this.setState({ loading: true });
        } else {
          this.setState({ loading: false });
        }
      };

    searchMethod = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    render() {
        const { moviesList } = this.state;

        return (
            <div>

{this.state.loading ? (
            <div class="loader" />
          ) : null}

{/* the onChange on the input - this will call the
 searchMethod method which will update the searchTerm 
 state with the input value every time the input is changed. */}

{/* the onSubmit on the form  this will call the search method
 which will make a request to the API endpoint providing
  the searchTerm as a query parameter. It will save the
   response data into the moviesList array (Note that we
    only save the imdbID values from each returned object
     because this is all we need to pass to our MovieCard
      component as a prop). */}

                <form onSubmit={this.search}>
                    <input
                       className='searchbox'
                        placeholder=".......Search"
                        onChange={this.searchMethod}
                    />
                    <button type="submit" className='btn'
                     onClick={() => this.LoaderMethod()}
                    >
                     {this.state.loading }
                        search
                    </button>
                </form>
                {/* In the render method, we check to see if the 
                array has at least one item. If it doesn't, 
                we display an "error" message to the user. */}
                {moviesList.length > 0 ? (
                    moviesList.map(movie => (
                        <MovieCard movieID={movie} key={movie} />
                    ))
                ) : (
                    <p>
                        Couldn't find any movie with that stupid name.
                    </p>
                )}
            </div>
        );
    }
}
export default Movieslist;