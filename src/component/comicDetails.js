import React from 'react';
import dateFormat from 'dateformat';
import Header from "./header";
import "./css/comicDetails.css";
import axios from 'axios';
import moment from 'moment';
export default class ComicDetails extends React.Component {
    constructor(props) { //holds data to be parsed into the page
        super(props);

        this.poster = this.onChangePoster.bind(this);
        this.title = this.onChangeTitle.bind(this);
        this.author = this.onChangeAuthor.bind(this);
        this.genre = this.onChangeGenre.bind(this);
        this.chapters = this.onChangeChapter.bind(this);
        this.summary = this.onChangeSummary.bind(this);
        // this.sortChapters = this.sortChapters.bind(this);

        this.state = {
            poster: "",
            title: "",
            author: [],
            genre: [],
            chapters: [{
                number: 0,
                date: Date
            }],
            summary:""
        };
    }

    onChangePoster(e){
        this.setState({
            poster: e.target.value
        });
    }
    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }
    onChangeAuthor(e){
        this.setState({
            author: e.target.value
        });
    }
    onChangeGenre(e){
        this.setState({
            genre: e.target.value
        });
    }
    onChangeChapter(e){
        this.setState({
            chapters: e.target.value
        });
    }
    onChangeSummary(e){
        this.setState({
            summary: e.target.value
        });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/on9comics/comic/' + this.props.match.params.id)
            .then(response => {
                this.setState({ 
                    poster: response.data.filepath,
                    title: response.data.title,
                    author: response.data.author,
                    genre: response.data.genre,
                    summary: response.data.summary,
                    chapters: response.data.chapters
                });
            })
            .catch(function (error) {
                console.log(error);
            })
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
                                <img src={this.state.poster} id="poster" class="img-responsive" alt="comic"></img>
                            </div>
                            <div class="col-sm-8" id="description"> 
                                <div class="row">
                                    <p class="title">
                                        {this.state.title}
                                    </p>
                                    <p class="author">
                                        <b>Author(s):</b>
                                        {this.state.author.map(item => (
                                        <span class="authorName">{item}</span>
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
                            {this.state.chapters.map((chapter) =>
                                <a key={chapter.id} class="chapter">
                                    {chapter.number}<span>{moment(chapter.date).format('DD-MM-YYYY')}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
