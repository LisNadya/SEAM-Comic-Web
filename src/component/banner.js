import React from 'react';
import "./css/header.css";
import axios from 'axios';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: [
                { img: "", header: "Catch the latest comic releases" },

                // {img: "", header: "Don't forget to visit daily!"}

            ]
        };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/on9comics/')
            .then(response => {
                this.setState({ banner: response.data });
                // console.log(this.state);
                // console.log(this.state.banner[0].banner_filepath);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    createCarousell= () =>{
        let carousells = []
        for (let i = 0; i < this.state.banner.length; i++) {
            let slideno = i.toString;
            if(i===0){
                carousells.push(<li data-target="#myCarousel" data-slide-to = {i} class="active"></li>)
            }
            else{
                carousells.push(<li data-target="#myCarousel" data-slide-to = {i}></li>)
            }
        }
        return carousells;
    }
    createBanner = () => {
        let list = []
        // this.state.banner.map((banner, i) =>{
        console.log(this.state.banner.length);
        for (let i = 0; i < this.state.banner.length; i++) {
            const element = this.state.banner[i];
            console.log(element);
            if (i === 0) {
                list.push(
                    <div class="item active">
                        <img src={element.banner_filepath} alt='banner'></img>
                        <div class='carousel-caption'>
                            <h3>{this.state.banner.header}</h3>
                        </div>
                    </div>)
            }
            else {
                list.push(
                    <div class="item">
                        <img src={element.banner_filepath} alt='banner'></img>
                        <div class='carousel-caption'>
                            <h3>{this.state.banner.header}</h3>
                        </div>
                    </div>)
            }
        }

        // }
        // )
        return list

    }
    render() {
        return (<div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                {this.createCarousell()}
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