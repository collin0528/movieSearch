import React, { Component } from 'react';
class Navtool extends Component {
    constructor(props){
        super(props)
        this.props=props
    }

    render() { 
        return (
            <section>
                <div className='navcon'>
                    <p onClick={() => this.props.defaultpageMethod()}>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <b>pHRESHCODE MOVIE HUB</b>
                </div>
            </section>
        );
    }
}
 
export default Navtool;
