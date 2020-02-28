import React from 'react';
import "./css/header.css";

export default class Banner extends React.Component {
    render() {
        return(<div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="https://placehold.it/1200x400?text=IMAGE" alt="Image"></img>
                <div class="carousel-caption">
                <h3>Catch the latest comic releases</h3>
                </div>      
            </div>

            <div class="item">
                <img src="https://placehold.it/1200x400?text=Another Image Maybe" alt="Image"></img>
                <div class="carousel-caption">
                    <h3>Don't forget to visit daily!</h3>
                </div>      
            </div>
            </div>
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>);
    }
}