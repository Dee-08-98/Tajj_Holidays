import React from 'react';
import '../../Home_Pg/Carousel/Carousel.css'
import One from '../../Asset/Home_img/restro4.jpg'
import Two from '../../Asset/Home_img/two2.jpeg'
import Three from '../../Asset/Experience/ex1.jpg'
import Four from '../../Asset/Destination/b.avif'
import Five from '../../Asset/Themes/sleep.jpeg'

function Carousel(props) {



    return (
        <>

            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner auto" id='sec'>
                    <div class="carousel-item active" >
                        <div className="a" >
                            <img src={One} class="d-block w-100" alt="..."></img>
                        </div>
                        <div className="y">
                            <h3>
                                Lorem ipsum dolor sit amet
                            </h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias beatae alias aperiam qui officiis necessitatibus numquam aut laborum, quos dolore fugit vitae iusto nisi voluptatem.</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="a" >
                            <img src={Two} class="d-block w-100" alt="..."></img>

                        </div>
                        <div className="y">
                            <h3>
                                Lorem ipsum dolor sit amet
                            </h3>
                            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore quasi a dolores nulla voluptates voluptatum aspernatur aperiam!</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="a" >
                            <img src={Three} class="d-block w-100" alt="..."></img>

                        </div>
                        <div className="y">
                            <h3>
                                Lorem ipsum dolor sit amet
                            </h3>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat ut explicabo aliquam commodi rerum nihil impedit. Culpa, consequatur ut.</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="a" >
                            <img src={Four} class="d-block w-100" alt="..."></img>

                        </div>
                        <div className="y">
                            <h3>
                                Lorem ipsum dolor sit amet
                            </h3>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est rerum maiores dolor. Soluta facilis quia ipsa?</h5>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div className="a" >
                            <img src={Five} class="d-block w-100" alt="..."></img>

                        </div>
                        <div className="y">
                            <h3>
                                Lorem ipsum dolor sit amet
                            </h3>
                            <h5>
                                Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium assumenda sed eaque?
                            </h5>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </>
    );
}

export default Carousel;