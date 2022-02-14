import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
            autoplay:1000,
        };
        return (
            <div style={{paddingLeft:"100px"}}>
                <Slider {...settings}>
                    <div className="img-box" >
                        <div className="info">
                            <h2>Interstellar</h2>
                            <h3>96% Match 2014 PG-13</h3>
                            <div className="info-p">
                                Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.
                            </div>
                        </div>
                        <img style={{height:"450px",width:"1180px", }} src="https://kevinallen4325.github.io/netflix-react/static/media/stepbrothers.d6301d7a.jpg" alt="" />
                    </div>
                    <div className="img-box">
                        <div className="info">
                            <h2>Interstellar</h2>
                            <h3>96% Match 2014 PG-13</h3>
                            <div className="info-p">
                                Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.
                            </div>
                        </div>
                        <img style={{height:"450px",width:"1100px", }} src="https://kevinallen4325.github.io/netflix-react/static/media/stargate.6af5cff1.jpg" alt="" />
                    </div>
                    <div className="img-box">
                        <div className="info">
                            <h2>Interstellar</h2>
                            <h3>96% Match 2014 PG-13</h3>
                            <div className="info-p">
                                Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.
                            </div>
                        </div>
                        <img style={{height:"450px",width:"1100px", }} src="https://kevinallen4325.github.io/netflix-react/static/media/intertellar.5fc9d0d2.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}