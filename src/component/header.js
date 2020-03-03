import React from 'react';
import "./css/header.css";

import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";
import axios from 'axios';
import TitleList from "./titleList"

export default class Header extends React.Component {
    constructor(props) { //holds data to be parsed into the page
        super(props);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state = {
            results : [],
            search: this.props.search,
           
        };
        // this.props.searchCallBack(this.state.search);
    }

    onChangeSearch(e) {
        this.setState({
            search: e.target.value
        });
    }
    
    sendData(e){
        this.props.searchCallBack(this.state.search);
    }

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
                                <input class="searchBar" type="search" value={this.state.search} onChange={this.onChangeSearch} placeholder="Search" aria-label="Search"></input>
                                <Link to={{pathname: '/list-title', search: this.state.search, state: { search : this.props.search}}}>
                                    {/* {console.log(this.state.search)} */}
                                    {/* <TitleList search = {this.state.search} /> */}
                                    <button onClick ={() => this.sendData(this.state.search)} class="btn searchBtn" type="submit"><span class="glyphicon glyphicon-search"></span></button>
                                </Link>
                        </form>
                    </div>
                </div>
            </nav >
        );
    }
}
