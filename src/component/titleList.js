import React from 'react';
import Header from "./header";
import Banner from "./banner";
import "./css/titleList.css";
import axios from 'axios';

import {BrowserRouter as Route, Link } from "react-router-dom";

import ComicDetails from "./comicDetails";

export default class TitleList extends React.Component {
    constructor(props) { //holds data to be parsed into the page
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            comic : [],
            alphabetical : 'az'
        };
    }

    
    componentDidMount() {
        axios.get('http://localhost:4000/on9comics/comic')
            .then(response => {
                this.setState({ comic : response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleClick(e){
        // access to e.target here
        // console.log(e.currentTarget);
    }


    createComic = () => { //creates the list of comics to be shown in the page
        let comic = []
        for (let i = 0; i < this.state.comic.length; i++) { 
            comic.push(
                <div class="col-sm-4">
                    <Link to ={"/comic/" + this.state.comic[i]._id}>
                        <img src={this.state.comic[i].filepath} class="img-responsive titleListImg" onClick={this.handleClick.bind(this.state.comic[i])} style={{width:"100%"}} alt="comic"></img>
                        <p class="comicTitle">{this.state.comic[i].title}</p>
                        <p class="comicChapter">Ch.{this.state.comic[i].latestchapter}</p>
                    </Link>
                </div>
            )
        }

        return comic
    }

    createTitleCaseList = (charA,charZ) => { //creates the alphabet list in the filter system
        let a = []
        let i = charA.charCodeAt(0)
        let j = charZ.charCodeAt(0)
        a.push(<label class="radio-inline"><input type="radio" name="titlecase" checked/>All</label>);
        a.push(<label class="radio-inline"><input type="radio" name="titlecase"/>#</label>);
        for (; i <= j; ++i) {
            a.push(<label class="radio-inline"><input type="radio" name="titlecase"/>{String.fromCharCode(i).toUpperCase()}</label>);
        }
        return a;
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'select' ? target.selected : target.value;
        // const alphabetical = value;
        
        console.log(value)

        this.setState({
            alphabetical : value }
    );
    }

    render() {
        let sortedTitles;

        if (this.state.alphabetical === "az") {
            console.log("sort");
            sortedTitles = this.state.comic.sort((a, b) =>
              a.title > b.title ? 1 : -1
            );
          } else {
            sortedTitles = this.state.comic.sort((a, b) =>
              a.title < b.title ? 1 : -1
            );
          }

        return (
        <div>
            <Header/>
            <Banner/>
            
            <div class="main container-fluid text-left">    
                <h3>List of Comic Titles</h3><br/>
                <div class="row">
                    <div class="col-sm-8">
                        {this.createComic()}
                    </div>
                    <div class="col-sm-4" id="filterContainer">
                        <div class="filterBox">
                            <div class="title">Sort By</div>
                                <div class="form-group">
                                    <label for="sel1">Sort by:</label>
                                    <select value={this.state.sort} onChange={this.handleChange} class="form-control" id="sel1">
                                        <option selected value="az">Sort A-Z</option>
                                        <option value="za">Sort Z-A</option>
                                        {/* <option selected val="">Latest update</option>
                                        <option val="">Released most recent</option> */}
                                    </select>
                                </div>
                        </div>
                        <div class="filterBox">
                            <div class="title">Filter By</div>
                            <form action="/">
                                <div class="form-group titleCase">
                                    <center>
                                        {this.createTitleCaseList('a','z')}
                                    </center>
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Genre:</label>
                                    <select class="form-control" id="sel1">
                                        <option val="">Action</option>
                                        <option val="">Comedy</option>
                                        <option val="">Mystery</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Status:</label>
                                    <select class="form-control" id="sel1">
                                        <option val="">Ongoing</option>
                                        <option val="">Completed</option>
                                    </select>
                                </div>
                                <button type="reset" class="btn btn-default">Default</button>
                                <button type="submit" class="btn btn-default">Filter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Route path ="/comic/:id" component={ComicDetails}/>
        </div>);
    }
}
