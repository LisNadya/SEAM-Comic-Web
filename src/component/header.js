import React from 'react';
import "./css/header.css";

export default class Header extends React.Component {
    render() {
        return (
            <nav id="header" class="navbar navbar-inverse topHeader">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                        </button>
                        
                        <a class="navbar-brand" href="/">
                            <div class="box" id="box1"></div>
                            <div class="box" id="box2"></div>
                            <div class="box" id="box3"></div>
                            <h1>On9Comic</h1>
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="/">Home</a></li>
                            <li><a href="list-title" >List of Titles</a></li>
                        </ul>
                    </div>
                </div>
                <div class="container-fluid sub">
                    <div class="searchContainer">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="searchBar" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn searchBtn" type="submit"><span class="glyphicon glyphicon-search"></span></button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}