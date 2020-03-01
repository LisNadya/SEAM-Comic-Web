import React from 'react';
import Header from "./header";
import Banner from "./banner";
import "./css/titleList.css";
import axios from 'axios';

// import {ExpressRouter as Router } from 'express';
import {BrowserRouter as Route, Link } from "react-router-dom";

import ComicDetails from "./comicDetails";

export default class Home extends React.Component {
    constructor(props) { //holds data to be parsed into the page
        super(props);
        this.state = {
            comic : []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/on9comics/comic')
            .then(response => {
                this.setState({ comic : response.data });
                console.log(this.state.comic[0]._id);
                // console.log(this.state.banner[0].banner_filepath);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    createComic = () => { //creates the list of comics to be shown in the page
        let comic = []
        for (let i = 0; i < this.state.comic.length; i++) { 
            comic.push(
            <div class="col-sm-2">
                <Link to ={"/comic/" + this.state.comic[i]._id}>
                    {/* <a href={"/comic-details" + this.state.comic[i].title}> */}
                        <img src={this.state.comic[i].filepath} class="img-responsive" onClick={this.handleClick.bind(this.state.comic[i])} style={{width:"100%"}} alt="comic"></img>
                    {/* </a> */}
                    <a href={"/comic-details"} class="comicTitle">{this.state.comic[i].title}</a>
                    <p class="comicChapter">Ch.{this.state.comic[i].latestchapter}</p>
                </Link>
            </div>)
        }
        return comic
    }

    handleClick(e){
        // access to e.target here
        console.log(e.currentTarget);
    }
    render() {
        return (
            // <Router>
                <div>
                <Header/>
                <Banner/>                
                    <div class="main container-fluid text-left">    
                        <h3>Latest comics releases</h3><br></br>
                        <div class="row">
                           {this.createComic()}
                        </div>
                    </div>
                    
                    <Route path ="/comic/:id" component={ComicDetails}/>
                </div>
            // </Router>
        );
            

    }
}
