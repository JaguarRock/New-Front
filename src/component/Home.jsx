import React, { Component } from 'react';
import { Link } from "react-router-dom";
import react from '../images/react.png';

class Home extends Component {
    render() {
        return(
            <div className="tt">
                <h1>홈 화면</h1>
                <Link to="/hotissue">
                    <img src={react} alt="Hotissue"></img>
                </Link>
            </div>
        );
    }
}

export default Home;