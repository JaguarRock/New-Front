import React, { Component } from 'react';
import chori from '../images/chori.jpg';
class About extends Component {
    render() {
        return (
            <div>
               <h1>우리의 사이트에 대하여</h1> 
               <h2>각 분야의 개발자들이 자유롭게 생각을 공유합니다.</h2>
               <br/><br/>
               <img src={chori} alt="Chori"></img>
            </div>
        );
    }
}

export default About;