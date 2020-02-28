import React from 'react';
import Header from "./header";
import Banner from "./banner";
import "./css/titleList.css";

export default class TitleList extends React.Component {
  render() {
    return (
    <div>
        <Header/>
        <Banner/>
        
        <div class="main container-fluid text-left">    
            <h3>List of Comic Titles</h3><br/>
            <div class="row">
                <div class="col-sm-8">
                    <div class="col-sm-4">
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                        <a href="#" class="comicTitle">Comic Title</a>
                        <p class="comicChapter">Ch.XXX</p>
                    </div>
                    <div class="col-sm-4"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                        <a href="#" class="comicTitle">Comic Title</a>
                        <p class="comicChapter">Ch.XXX</p>    
                    </div>
                    <div class="col-sm-4"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                        <a href="#" class="comicTitle">Comic Title</a>
                        <p class="comicChapter">Ch.XXX</p>  
                    </div>
                    <div class="col-sm-4"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                        <a href="#" class="comicTitle">Comic Title</a>
                        <p class="comicChapter">Ch.XXX</p>    
                    </div>
                    <div class="col-sm-4">
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                        <a href="#" class="comicTitle">Comic Title</a>
                        <p class="comicChapter">Ch.XXX</p>
                    </div>
                    <div class="col-sm-4"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                        <a href="#" class="comicTitle">Comic Title</a>
                        <p class="comicChapter">Ch.XXX</p>    
                    </div>
                    <div class="col-sm-4"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                        <a href="#" class="comicTitle">Comic Title</a>
                        <p class="comicChapter">Ch.XXX</p>  
                    </div>
                    <div class="col-sm-4"> 
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                        <a href="#" class="comicTitle">Comic Title</a>
                        <p class="comicChapter">Ch.XXX</p>    
                    </div>
                </div>
                <div class="col-sm-4" id="filterContainer">
                    <div class="filterBox">
                        <div class="title">Sort By</div>
                        <form action="/action_page.php">
                            <div class="form-group">
                                <label for="sel1">Sort by:</label>
                                <select class="form-control" id="sel1">
                                    <option val="">Alphabetical order</option>
                                    <option val="">Latest update</option>
                                    <option val="">Released most recent</option>
                                </select>
                            </div>
                            <button type="reset" class="btn btn-default">Reset</button>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                    </div>
                    <div class="filterBox">
                        <div class="title">Filter By</div>
                        <form action="/action_page.php">
                            <div class="form-group titleCase">
                                <center>
                                    <label class="radio-inline"><input type="radio" name="titlecase" checked/>All</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>#</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>A</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>B</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>C</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>D</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>E</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>F</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>G</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>H</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>I</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>J</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>K</label>
                                    <label class="radio-inline"><input type="radio" name="titlecase"/>L</label>
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
                            <button type="reset" class="btn btn-default">Reset</button>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>);
  }
}
