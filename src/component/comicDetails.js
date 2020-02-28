import React from 'react';
import Header from "./header";
import "./css/comicDetails.css";

export default class ComicDetails extends React.Component {
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
                                <p class="title">Comic Title</p>
                                <p class="author"><b>Author(s): </b>Author Name</p>    
                            </div>
                            <div class="row" id="genreContainer">
                                <p class="genre">Genre</p>
                                <p class="genre">Genre</p>
                                <p class="genre">Genre</p>
                                <p class="genre">Genre</p>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="summary">
                        <p>"Spider-Man" centers on student Peter Parker who, 
                            after being bitten by a genetically-altered spider, 
                            gains superhuman strength and the spider-like ability to 
                            cling to any surface. He vows to use his abilities to fight crime, 
                            coming to understand the words of his beloved Uncle Ben: 
                            "With great power comes great responsibility."</p>
                    </div>
                </div>
                <div class="col-sm-4" id="chapterContainer">
                    <h4>Chapter List</h4>
                    <div class="row" id="chapterBox">
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                        <a href="#" class="chapter">Ch.XXX <span>27/02/2020</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>);
  }
}
