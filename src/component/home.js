import React from 'react';
import Header from "./header";
import Banner from "./banner";
import "./css/titleList.css";

export default class Home extends React.Component {
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
        for (let j = 0; j < 10; j++) { 
            comic.push(
            <div class="col-sm-3">
                <img src={this.state.poster} class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                <a href={this.state.link} class="comicTitle">{this.state.title}</a>
                <p class="comicChapter">Ch.{this.state.chapter}</p>
            </div>)
        }
        return comic
    }
    render() {
        return (
        <div>
            <Header/>
            <Banner/>
            
            <div class="main container-fluid text-left">    
                <h3>Latest comics releases</h3><br></br>
                <div class="row">
                    {this.createComic()} 
                </div>
            </div>
        </div>);
    }
}
