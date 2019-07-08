import React from 'react';
import loader from '../Loader/loader.svg';
import './Loader.css';

class Loader extends React.Component {

    render() {
        return (
            <div className="loader-wrapper">
                <p className="loader-heading">Please provide user name in form above.</p>
                <img src={loader} alt="Loader" className="loader"/>
            </div>
        )
    }
}

export default Loader;
