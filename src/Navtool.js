import React, { Component } from 'react';
class Navtool extends Component {
    constructor(){
        super()
    }

    render() { 
        return (
            <section>
                <div className='navcon'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <b>CUTS MOVIE HUB</b>
                </div>
            </section>
        );
    }
}
 
export default Navtool;
