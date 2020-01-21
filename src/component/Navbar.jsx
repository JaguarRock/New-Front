import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import jaguar from "../images/jaguar.jpg";
class Navbar extends Component {
    render() {
        return (
            <Nav className="navbar navbar-expand-lg">
                <div></div>
                <Link to="/">
                    <img src={jaguar} alt="jaguar"></img>
                </Link>
                <Link to="/">
                    재결합
                </Link>
                <Link to="/about">About</Link>
                <Link to="/askboard">질문게시판</Link>
                <Link to="/discuss">토론게시판</Link>
                <Link to="/hotissue">핫게</Link>
            </Nav>
        )
    }
}

export default Navbar;