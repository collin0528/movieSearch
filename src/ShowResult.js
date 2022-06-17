import React, { Component } from 'react';
class ShowResult extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <>
            <div className="results">
                
                <div className="movie-info">
                    <h2>Movie Details</h2>
                    
                </div>
                <button onClick={() => this.props.load('movielister')}>close</button>
            </div>
            </>
        );
    }
}
 
export default ShowResult;