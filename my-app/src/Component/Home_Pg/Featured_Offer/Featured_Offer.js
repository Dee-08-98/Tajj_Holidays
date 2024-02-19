import React, { useEffect } from 'react';
import AOS from "aos";
// import "aos/dist/aos.css";       
import '../../Home_Pg/Featured_Offer/Featured_Offer.css'
import O1 from '../../Asset/Home_img/four4.jpeg'
import O2 from '../../Asset/Destination/n4.jpeg'
import O3 from '../../Asset/Home_img/twelve_1.jpeg'
import O4 from '../../Asset/Home_img/seven7.jpeg'
import { Link } from 'react-router-dom'

function Featured_Offer(props) {
    useEffect(() => {
        AOS.init({
            once: false,
            disable: "phone",
            duration: 1400,
            offset: 30,
            easing: 'ease-in-sine',
            delay: 30,
        });
    }, []);

    return (
        <>
            <div className="container" id='Featured_Offers'>
                <div className="row">
                    <h2 data-aos="zoom-in" >Featured Offers</h2>
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={O3} alt="......" />
                            </div>
                            <div className="b">
                                <h5>Family Gateways</h5>
                            </div>
                            <div className="c">
                                <p>Create memories for a lifetime with your loved once.</p>

                            </div>
                            <div className="d mt-4">
                                <Link to='NestAagra '><button> View Details</button></Link>

                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={O2} alt="..." />
                            </div>
                            <div className="b">
                            <h5>Royal Experiences</h5>

                            </div>
                            <div className="c">
                            <p>Experience royal living at the palaces of the Tajj.</p>

                            </div>
                            <div className="d mt-4">
                                <Link to='NestJodhpur'><button> View Details</button></Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={O1} alt="..." />
                            </div>
                            <div className="b">
                                <h5>Romantic Hideaways</h5>

                            </div>
                            <div className="c">
                                <p>Create unforgettable for you and your beloved.</p>

                            </div>
                            <div className="d mt-4">
                                <Link to='NestJammuKashmir'><button> View Details</button></Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={O4} alt="..." />
                            </div>
                            <div className="b">
                                <h5>Itineraries</h5>

                            </div>
                            <div className="c">
                                <p>Create memories for a lifetime with your loved ones .</p>

                            </div>
                            <div className="d mt-4">
                                <Link to='NestDharamshala'><button> View Details</button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Featured_Offer;