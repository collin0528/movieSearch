import React, { Component } from 'react';
class ShowResult extends Component {
    state = {  } 
    render() { 
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
                    <p>{Plot && Plot.substr(0, 350)}</p>
                    <div className="tags-container">
                        {Genre &&
                            Genre.split(', ').map(g => (
                                <span key={g}>{g}</span>
                            ))}
                    </div>
                </div>
                <button>close</button>
            </div>
            </>
        );
    }
}
 
export default ShowResult;