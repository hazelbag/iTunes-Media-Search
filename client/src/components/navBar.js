import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import musicIcon from '../images/music.jpg';
import movieIcon from '../images/movie.png';
import tvShowIcon from '../images/tvShow.png';
import musicVidIcon from '../images/musicVideo.png';
import homeIcon from '../images/home.png';

//this component renders different icons as navigation elements

function NavBar() {
  return (
    <header className="App-header">
      <h1 className="welcome-text">Welcome to the iTunes Media Search</h1>
      <Navbar expand="sm" bg="dark" variant="light" className="icons"> 
            <Nav className="mr-auto">

            <NavLink to="/" activeStyle = {{ opacity:"0.4" }} >
                <img className= "nav-img" src = {homeIcon} alt = "home icon"/>
              </NavLink>

              <NavLink to="/music/" activeStyle = {{ opacity:"0.4" }} >
                <img className= "nav-img" src = {musicIcon} alt = "music icon"/>
              </NavLink>

              <NavLink to="/musicVideo" activeStyle = {{ opacity:"0.4" }} >
              <img className = "nav-img" src = {musicVidIcon} alt = "music video icon"/>
              </NavLink>

              <NavLink to="/movies" activeStyle = {{ opacity:"0.4" }} >
                <img className = "nav-img" src = {movieIcon} alt = "movie icon"/>
              </NavLink> 

              <NavLink to="/tvShow" activeStyle = {{ opacity:"0.4" }}>
              <img className = "nav-img" src = {tvShowIcon} alt = "tv-Show icon" />
              </NavLink>

            </Nav>
      </Navbar>
    </header>
  );
}

export default NavBar;

