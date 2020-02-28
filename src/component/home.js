import React from 'react';
import Header from "./header";
import Banner from "./banner";
import "./css/titleList.css";

export default class Home extends React.Component {
  render() {
    return (
    <div>
        <Header/>
        <Banner/>
        
        <div class="main container-fluid text-left">    
            <h3>Latest comics releases</h3><br></br>
            <div class="row">
                <div class="col-sm-3">
                    <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                    <a href="#" class="comicTitle">Comic Title</a>
                    <p class="comicChapter">Ch.XXX</p>
                </div>
                <div class="col-sm-3"> 
                    <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                    <a href="#" class="comicTitle">Comic Title</a>
                    <p class="comicChapter">Ch.XXX</p>    
                </div>
                <div class="col-sm-3"> 
                    <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                    <a href="#" class="comicTitle">Comic Title</a>
                    <p class="comicChapter">Ch.XXX</p>  
                </div>
                <div class="col-sm-3"> 
                    <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                    <a href="#" class="comicTitle">Comic Title</a>
                    <p class="comicChapter">Ch.XXX</p>    
                </div>
                <div class="col-sm-3">
                    <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                    <a href="#" class="comicTitle">Comic Title</a>
                    <p class="comicChapter">Ch.XXX</p>
                </div>
                <div class="col-sm-3"> 
                    <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                    <a href="#" class="comicTitle">Comic Title</a>
                    <p class="comicChapter">Ch.XXX</p>    
                </div>
                <div class="col-sm-3"> 
                    <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                    <a href="#" class="comicTitle">Comic Title</a>
                    <p class="comicChapter">Ch.XXX</p>  
                </div>
                <div class="col-sm-3"> 
                    <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                    <a href="#" class="comicTitle">Comic Title</a>
                    <p class="comicChapter">Ch.XXX</p>    
                </div>
            </div>
        </div>
    </div>);
  }
}
