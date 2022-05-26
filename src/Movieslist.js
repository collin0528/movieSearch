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