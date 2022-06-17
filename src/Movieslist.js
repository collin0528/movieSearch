import React, { Component } from 'react';

import axios from 'axios';
import ShowResult from './ShowResult';
class Movieslist extends React.Component {
constructor(){
    super() 
    this.state = {
        movieData: {},
        loading: false,
    moviesList:[],
    searchTerm: '',
    value: localStorage.getItem('movie-collection') == null ? 0 : JSON.parse(localStorage.getItem('movie-collection')).length,
     movieCollection:  localStorage.getItem('movie-collection') == null ? [] : JSON.parse(localStorage.getItem('movie-collection'))

};
}


    search = event => {
        
        event.preventDefault();
        this.setState({
            loading: true
        })
        axios.get(
                `https://www.omdbapi.com/?apikey=${"bab92e68"}&s=${
                    this.state.searchTerm
                }&plot=full`
                
            )
            .then(res => res.data)
            .then(res => {
                console.log(res);
                this.setState({
                    loading: false
                })
                if (!res.Search) {
                    this.setState({ moviesList: [] });
                    return;
                }

                    this.setState({
                        moviesList:res.Search
                    });
            });
    };


    searchMethod = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    showMovie=(index)=>{
        let single_movie = []
            single_movie.push(this.state.moviesList[index])
            this.setState({
                moviesList : single_movie
            })

    }
    addToCollection = (index) => {
        
        let movie_to_add = this.state.moviesList[index];

        let movies_collection = localStorage.getItem('movie-collection');

        if(movies_collection == null){
            movies_collection = [];
            movies_collection.push(movie_to_add);

            localStorage.setItem('movie-collection', JSON.stringify(movies_collection))

        }else{
            movies_collection = JSON.parse(movies_collection);
            movies_collection.push(movie_to_add);
            localStorage.setItem('movie-collection', JSON.stringify(movies_collection))
        }

        this.setState({
            value: this.state.value + 1
        })
    }


    removeFromCollection = (index) => {
        
        let movie_to_remove = this.state.moviesList[index];

        let movies_remove = localStorage.getItem('movie-collection');

        if(movies_remove == movies_remove){
            movies_remove = [];
            movies_remove.slice(movie_to_remove);

            localStorage.setItem('movie-collection', JSON.stringify(movies_remove))
        }else{
            movies_remove = JSON.parse(movies_remove);
            movies_remove.slice(movie_to_remove);
            localStorage.removeItem('movie-collection')
        }

        this.setState({
            value: this.state.value - 1
        })
    }

    loadCollection=()=>{
        // alert("works")

        let collectionStorage = localStorage.getItem("movie-collection");
        if(collectionStorage != null){
            collectionStorage = JSON.parse(collectionStorage);

            this.setState({
                moviesList: collectionStorage
            })
        }
      
      }

   

  
    render() {
        let loadingSpinner;
        if(this.state.loading == true){
            loadingSpinner = <div className='loader'/>
        }else{
            loadingSpinner = <div></div>
        }

        const { moviesList } = this.state;

        console.log('from render: ', moviesList)

        
        let movieSearchedResults;
        if(moviesList.length == 0){
            movieSearchedResults =  <div>No result with that stupid name</div>
        }else{
            movieSearchedResults = moviesList.map((movie, index) => (
                <div className='movie-card ' key={index}>   
                        <img className='viewImage' src={movie.Poster} />
                        <div key={index}>
                        <h3>{movie.Title}</h3>
                        <h4> {movie.Type}</h4>
                        <p>{movie.Year}</p>
                        <h1>{movie.imdbID}</h1>
                        <div className='btn1'>
                        <button className='btn2' onClick={()=>this.showMovie(index)}>Details</button>
                        <b className='btn2' onClick={() => this.addToCollection(index)}>AddToWatch</b>
                        <b className='btn2' onClick={() => this. removeFromCollection(index)}>Remove</b>
                        </div>
                        </div>
                </div>))  
        }

        return (
            <>
            <div>

                {loadingSpinner}
                <div className='coverrar'  onClick={this.loadCollection}>
             <i className='movieshow'>
                {this.state.value}</i>
                </div>
                <form onSubmit={this.search}>
                    <input
                       className='searchbox'
                        placeholder=".......Search"
                        onChange={this.searchMethod}
                    />
                    <button>back</button>
                </form>
                    {movieSearchedResults}
                  
            </div>
            </>
        );
    }
}
export default Movieslist;