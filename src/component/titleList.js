import React from 'react';
import Header from "./header";
import Banner from "./banner";
import "./css/titleList.css";

export default class TitleList extends React.Component {
    constructor(props) { //holds data to be parsed into the page
        super(props);
        this.state = {
            poster: "https://placehold.it/150x80?text=IMAGE",
            link: "/comic-details",
            title: "Comic Title",
            chapter: "XXX"
        };
    }
    createComic = () => { //creates the list of comics to be shown in the page
        let comic = []
        for (let j = 0; j < 5; j++) {
            comic.push(<div class="col-sm-3"><img src={this.state.poster} class="img-responsive" style={{width:"100%"}} alt="Image"></img>
            <a href={this.state.link} class="comicTitle">{this.state.title}</a>
            <p class="comicChapter">Ch.{this.state.chapter}</p></div>)
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
    render() {
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
                            <form action="/">
                                <div class="form-group">
                                    <label for="sel1">Sort by:</label>
                                    <select class="form-control" id="sel1">
                                        <option val="">Alphabetical order</option>
                                        <option val="">Latest update</option>
                                        <option val="">Released most recent</option>
                                    </select>
                                </div>
                                <button type="reset" class="btn btn-default">Default</button>
                                <button type="submit" class="btn btn-default">Sort</button>
                            </form>
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
        </div>);
    }
}
