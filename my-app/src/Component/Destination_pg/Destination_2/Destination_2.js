import React, { useState , useEffect } from 'react';
import AOS from "aos";
import { Link } from 'react-router-dom';
import '../../Destination_pg/Destination_2/Destination_2.css'

import Ten from '../../Asset/Destination/ten.jpeg'
import Eleven from '../../Asset/Destination/eleven.jpeg'
import Twelve from '../../Asset/Destination/mm1.jpeg'
import Thirteen from '../../Asset/Destination/mm2.jpeg'
import Fourteen from '../../Asset/Destination/fourteen_2.jpeg'
import Fifteen from '../../Asset/Destination/fifteen.jpeg'
import Seventeen from '../../Asset/Destination/seventeen_1.jpeg'
import Eighteen from '../../Asset/Destination/eighteen.jpeg'
import L1 from '../../Asset/Destination/mm3.jpeg'
import s1 from '../../Asset/Experience/ten10.jpeg'

function Destination_2(props) {

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
            <div className="container pt-4" id='des2'>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={Ten} alt="......" />
                            </div>
                            <div className="b">
                                <h5> jaipur </h5>
                            </div>
                            <div className="c">

                                <Link to='/NestJaipur'><button className='btnn'> View Details</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={Eleven} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Jodhpur </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestJodhpur'><button className='btnn'> View Details</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={Twelve} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Manali </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestManali'><button className='btnn'> View Details</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={Thirteen} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Shimla </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestShimla'><button className='btnn'> View Details</button></Link>
                            </div>

                        </div>
                    </div>


                    {/* ================= */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={Fourteen} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Jammu & Kashmir </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestJammuKashmir'><button className='btnn'> View Details </button></Link>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={Fifteen} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Kerla </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestKerla'><button className='btnn'> View Details</button></Link>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={Seventeen} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Jim Corbett </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestJimCorbett'><button className='btnn'> View Details</button></Link>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={s1} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Relegious Tour </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestRelegious'><button className='btnn'> View Details</button></Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Destination_2;