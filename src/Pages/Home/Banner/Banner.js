import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './../../../images/banner/banner1.jpg';
import img2 from './../../../images/banner/banner2.jpg';
import img3 from './../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel className="mt-1" id="home">
                <Carousel.Item>
                    <img alt=""
                        className="d-block w-100"
                        src={img1}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt=""
                        className="d-block w-100"
                        src={img2}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt=""
                        className="d-block w-100"
                        src={img3}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;