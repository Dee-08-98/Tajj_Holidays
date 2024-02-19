import React, { useEffect } from 'react';
import AOS from "aos";
import O1 from '../../Asset/Themes/four4.jpeg'
import O2 from '../../Asset/Themes/one1.jpg'
import O3 from '../../Asset/Themes/twelve_1.jpeg'
// import O4 from '../../Asset/Themes/seven7.jpeg'
import O5 from '../../Asset/Themes/21.jpeg'
import O6 from '../../Asset/Themes/s_2.jpeg'
import O7 from '../../Asset/Themes/sleep.jpeg'
import O8 from '../../Asset/Themes/spa.webp'

import { Link } from 'react-router-dom';
import '../../Themes_1/Themes_2/Themes_2.css'
function Themes_2(props) {

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
        <div className="container pt-4" id='Themes'>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                    <div  data-aos="zoom-in" className="card">
                        <div className="a">
                            <img src={O3} alt="......" />
                        </div>
                        <div className="b">
                            <h5>Family Getaway</h5>
                            <p>Create memories for a lifetime with your loved once</p>
                        </div>
                        <div className="c">
                           
                            <Link to='/NestAagra'><button className='btnn'> View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                    <div  data-aos="zoom-in" className="card">
                        <div className="a">
                            <img src={O2} alt="..." />
                        </div>
                        <div className="b">
                            <h5>Royal Experiences</h5>
                            <p>Experience royal living at the palaces of the Taj.</p>

                        </div>
                        <div className="c">
                           
                           <Link to='/NestJodhpur'><button className='btnn'> View Details</button></Link>
                       </div>

                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                    <div  data-aos="zoom-in" className="card">
                        <div className="a">
                            <img src={O1} alt="..." />
                        </div>
                        <div className="b">
                            <h5>Romantic Hideaways</h5>
                            <p>Create unforgettable for you and your beloved</p>

                        </div>
                        <div className="c">
                           
                           <Link to='/NestJammuKashmir'><button className='btnn'> View Details</button></Link>
                       </div>

                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                    <div  data-aos="zoom-in" className="card">
                        <div className="a">
                            <img src={O5} alt="..." />
                        </div>
                        <div className="b">
                            <h5>Wilderness Getaways</h5>
                            <p>Soak in the majesty of nature</p>

                        </div>
                        <div className="c">
                           
                           <Link to='/NestJimCorbett'><button className='btnn'> View Details</button></Link>
                       </div>

                    </div>
                </div>


                {/* ================= */}
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                    <div  data-aos="zoom-in" className="card">
                        <div className="a">
                            <img src={O8} alt="..." />
                        </div>
                        <div className="b">
                            <h5>Spa Retreats</h5>
                            <p>The gift of pampering you deserve</p>

                        </div>
                        <div className="c">
                           
                           <Link to='/NestGoa'><button className='btnn'> View Details</button></Link>
                       </div>


                    </div>
                </div>
               
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                    <div  data-aos="zoom-in" className="card">
                        <div className="a">
                            <img src={O6} alt="..." />
                        </div>
                        <div className="b">
                            <h5>Culture Capitals</h5>
                            <p>Timeless experiences steeped in tradition</p>

                        </div>
                        <div className="c">
                           
                           <Link to='/NestKerla'><button className='btnn'> View Details</button></Link>
                       </div>


                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                    <div  data-aos="zoom-in" className="card">
                        <div className="a">
                            <img src={O7} alt="..." />
                        </div>
                        <div className="b">
                            <h5>Woyage</h5>
                            <p>Special Stay Packages, Loved by Every She</p>

                        </div>
                        <div className="c">
                           
                           <Link to='/NestShimla'><button className='btnn'> View Details</button></Link>
                       </div>
                       

                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Themes_2;