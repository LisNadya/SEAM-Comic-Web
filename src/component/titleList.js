import React from 'react';
import Header from "./header";
import Banner from "./banner";
import "./css/titleList.css";
import axios from 'axios';
import querySearch from "stringquery";


import {BrowserRouter as Route, Link } from "react-router-dom";

import ComicDetails from "./comicDetails";

export default class TitleList extends React.Component {
    constructor(props) { //holds data to be parsed into the page
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.callbackFunction = this.callbackFunction.bind(this);
        this.state = {
            comic : [],
            alphabetical : 'az',
            case: '',
            search: '',
            filter: false,
            genre: '',
            status: '',
            alphabet: ''
        };
    }

    
    getAllTitles() {
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
        let comic = [];
        
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
    searchComic = () =>{
        axios.get('http://localhost:4000/on9comics/comic/title/search?title='+ this.state.search)
        .then(response => {
            this.setState({ comic : response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    filterSystem = () =>{
        axios.get('http://localhost:4000/on9comics/comic/title/filter?genre='+ this.state.genre + '&status='+this.state.status + '&title='+this.state.alphabet)
        .then(response => {
            this.setState({ comic : response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    createTitleCaseList = (charA,charZ) => { //creates the alphabet list in the filter system
        let a = []
        let i = charA.charCodeAt(0)
        let j = charZ.charCodeAt(0)
        a.push(<label class="radio-inline"><input type="radio" name="alphabet" value="a" checked/>A</label>);
        for (; i <= j; ++i) {
            a.push(<label class="radio-inline"><input type="radio" name="alphabet" value={String.fromCharCode(i).toUpperCase()}/>{String.fromCharCode(i).toUpperCase()}</label>);
        }
        return a;
    }

    callbackFunction = (searchData) =>{
        this.setState({ search : searchData})
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'select' ? target.selected : target.value;
        // const alphabetical = value;
        
        console.log(value)

        this.setState({alphabetical : value});
    }

    getParam(){
        var query = querySearch(this.props.location.search);

        if(query.search!=null){
            this.state.search=query.search;
        }
        else if(query.genre != null && query.status != null && query.alphabet != null){
            this.state.filter=true; 
            this.state.genre=query.genre; 
            this.state.status=query.status; 
            this.state.alphabet=query.alphabet;
        }
        else{
            this.state.search = '';
            this.state.genre=''; 
            this.state.status=''; 
            this.state.alphabet='';
        }

        return query;
    }

    getComics(){
        var query =  this.getParam();

        if(query.search!=null){
            this.searchComic();
        }
        else if(this.state.filter==true){
            this.filterSystem();
            console.log("FILTER SYSTEM IS WORKING");
        }
        else{
            this.getAllTitles();
        }
    }

    render() {
        let sortedTitles;        
        if (this.state.alphabetical === "az") {
            console.log("sort");
            sortedTitles = this.state.comic.sort((a, b) =>
              a.title > b.title ? 1 : -1
            );
          } 
        else {
            sortedTitles = this.state.comic.sort((a, b) =>
                a.title < b.title ? 1 : -1
            );
        }
        console.log("Received search: " + this.state.search);
        return (
            
        <div>
            <Header searchCallBack = {this.callbackFunction}/>
            <Banner/>
            
            <div class="main container-fluid text-left">    
                <h3>List of Comic Titles</h3><br/>
                <div class="row">
                    <div class="col-sm-8" >
                        {this.getComics()}
                        {this.createComic()}
                    </div>
                    <div class="col-sm-4" id="filterContainer">
                        <div class="filterBox">
                            <div class="title">Sort By</div>
                                <div class="form-group">
                                    <label for="sel1">Sort by:</label>
                                    <select onChange={this.handleChange} class="form-control" id="sel1">
                                        <option selected value="az">Sort A-Z</option>
                                        <option value="za">Sort Z-A</option>
                                    </select>
                                </div>
                        </div>
                        <div class="filterBox">
                            <div class="title">Filter By</div>
                            <form action="/list-title">
                                <div class="form-group titleCase">
                                    <center>
                                        {this.createTitleCaseList('b','z')}
                                    </center>
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Genre:</label>
                                    <select class="form-control" name="genre">
                                        <option selected value="Action">Action</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="Comedy">Comedy</option>
                                        <option value="Superhero">Superhero</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Status:</label>
                                    <select class="form-control" name="status">
                                        <option val="Ongoing">Ongoing</option>
                                        <option val="Completed">Completed</option>
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
