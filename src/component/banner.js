import React from 'react';
import "./css/header.css";

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: [{img: "https://placehold.it/1200x400?text=IMAGE", header: "Catch the latest comic releases"},
                    {img: "https://placehold.it/1200x400?text=Another Image Maybe", header: "Don't forget to visit daily!"}
                    ]
        };
    }
    createBanner = () => {
        let list = []
        this.state.banner.map((banner, i) =>
        {
            if (i==0) {
                list.push(<div class="item active">
                    <img src={banner.img} alt='Image'></img>
                    <div class='carousel-caption'>
                    <h3>{banner.header}</h3>
                    </div>
                </div>)
            }
            list.push(<div class="item">
                <img src={banner.img} alt='Image'></img>
                <div class='carousel-caption'>
                <h3>{banner.header}</h3>
                </div>
            </div>)
        }
        )
        return list

    }
    render() {
        return(<div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
                {this.createBanner()}
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