import React, { useEffect } from 'react';
import AOS from "aos";
// import "aos/dist/aos.css";
import O1 from '../../Asset/Home_img/restro6.jpg'
import O2 from '../../Asset/Home_img/o1.jpeg'
import O3 from '../../Asset/Home_img/restro3.jpg'
import O4 from '../../Asset/Home_img/seven7.jpeg'
import { Link } from 'react-router-dom'
import '../../Home_Pg/Trending_Offers/Trending_Offers.css'

function Trending_Offers(props) {
    
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
            <div className="container" id='Trending_Offers'>
                <div className="row">
                    <h2 data-aos="zoom-in" >Trending Offers</h2>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div  data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={O3} alt="......" />
                            </div>
                            <div className="inner">
                                <div className="b">
                                    <h5>Tajj Exotica Resort & Spa, Goa- Family Getaways Summer Offer</h5>
                                </div>
                                <div className="c">
                                    <p>A sun-drenched fountain marks your entrance into the Tajj Exotica Resort & Spa, Goa</p>

                                </div>
                               <div className='d'>
                               <Link to='NestGoa'><button className=''> View Details</button></Link>

                               </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div  data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={O2} alt="..." />
                            </div>
                            <div className="inner">
                                <div className="b">
                                    <h5> City Palace , Jaipur - Royal Experiences Summer Offer</h5>

                                </div>
                                <div className="c">
                                    <p>Lake Pichola shimmers under the warm glow of the sun, reflecting the ethereal majesty of the unmatched City Palace , Jaipur.</p>

                                </div>
                                <div className='d'>
                               <Link to='NestJaipur'><button className=''> View Details</button></Link>

                               </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div  data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={O1} alt="..." />
                            </div>
                            <div className="inner">
                                <div className="b">
                                    <h5>Tajj Chia Kutir Resort & Spa, Darjeeling- Family Getaways Summer Offer
                                        Getaways summer Offers</h5>

                                </div>
                                <div className="c">
                                    <p>Create unforgettable for you and your beloved.</p>

                                </div>
                                <div className='d'>
                               <Link to='NestDarjelling'><button className=''> View Details</button></Link>

                               </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <div  data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={O4} alt="..." />
                            </div>
                            <div className="inner">
                                <div className="b">
                                    <h5>Tajj Madikeri Resort & Spa, Coorg- Family Getaways Summer Offer</h5>

                                </div>
                                <div className="c">
                                    <p>The Tajj Madikeri Resort & Spa, Coorg. With Kodagu architecture, a temperature controlled Infinity Pool, an outdoor pool.</p>

                                </div>
                                <div className='d'>
                               <Link to='NestDharamshala'><button className=''> View Details</button></Link>

                               </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trending_Offers;