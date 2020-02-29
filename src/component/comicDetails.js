import React from 'react';
import Header from "./header";
import "./css/comicDetails.css";

export default class ComicDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            poster: "https://www.idwpublishing.com/wp-content/uploads/2018/10/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8yNDAvNzQ0L29yaWdpbmFsL1NwaWRlcm1hbjAxX2N2ckEuanBn.jpeg",
            title: "Comic Title",
            author: ['Author1', 'Author2', 'Author3'],
            genre: ['Genre1', 'Genre2', 'Genre3'],
            chapter: [{title: 'Ch.XXX',date: '27/02/2020',link: '/'},{title: 'Ch.XXX',date: '27/02/2020',link: '/'}],
            summary:"This is the summary"
        };
    }
    render() {
        return (
        <div>
            <Header/>
            <div class="main container-fluid text-left">    
                <div class="row">
                    <div class="col-sm-8">
                        <div class="row">
                            <div class="col-sm-4">
                                <img src="https://www.idwpublishing.com/wp-content/uploads/2018/10/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8yNDAvNzQ0L29yaWdpbmFsL1NwaWRlcm1hbjAxX2N2ckEuanBn.jpeg" id="poster" class="img-responsive" alt="Image"></img>
                            </div>
                            <div class="col-sm-8" id="description"> 
                                <div class="row">
                                    <p class="title">{this.state.title}</p>
                                    <p class="author"><b>Author(s):</b>
                                    {this.state.author.map(item => (
                                        <span key={item}> {item} </span> 
                                    ))}
                                    </p>    
                                </div>
                                <div class="row" id="genreContainer">
                                    {this.state.genre.map(item => (
                                         <p key={item} class="genre">{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div class="row" id="summary">
                            <p>{this.state.summary}</p>
                        </div>
                    </div>
                    <div class="col-sm-4" id="chapterContainer">
                        <h4>Chapter List</h4>
                        <div class="row" id="chapterBox">
                            {this.state.chapter.map((chapter) =>
                                <a key={chapter.id} href={chapter.link} class="chapter">{chapter.title} <span>{chapter.date}</span></a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
