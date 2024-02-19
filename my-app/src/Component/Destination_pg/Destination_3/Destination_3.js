import React, { useState , useEffect } from 'react';
import AOS from "aos";
import { Link } from 'react-router-dom';
import '../../Destination_pg/Destination_3/Destination_3.css'

import Mm5 from '../../Asset/Destination/mm5.jpg'
import Mm6 from '../../Asset/Destination/mm6.jpg'
import Mm7 from '../../Asset/Destination/mm7.jpg'
import Mm8 from '../../Asset/Destination/mm8.jpg'
import Mm9 from '../../Asset/Destination/mm9.jpg'
import Mm10 from '../../Asset/Destination/mm10.jpg'
import Mm11 from '../../Asset/Destination/mm11.jpg'
import Mm12 from '../../Asset/Destination/mm12.jpg'

function Destination_3(props) {
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
            <div className="container pt-4" id='des3'>
                <div className="row">

                    <h3 data-aos="zoom-in" style={{color:'Black',fontWeight:'900',textAlign:'center'}}>Our Relegious_Packages</h3>

                    {/* ================= */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Mm5} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Ayodhya </h5>
                            </div>
                            <div className="d">
                                <h5> <span>PRICE</span> :- 50,0000 / </h5>
                            </div>
                            <div className="c mt-3">

                                <Link to='/book_holiday'><button className='btnn'> Contact_US </button></Link>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in"  className="card">
                            <div className="a">
                                <img src={Mm6} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Kedarnath </h5>

                            </div>
                            <div className="d">
                                <h5> <span>PRICE</span> :- 50,0000 / </h5>
                            </div>
                            <div className="c mt-3">

                                <Link to='/book_holiday'><button className='btnn'> Contact_US </button></Link>

                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Mm7} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Badrinath </h5>

                            </div>
                            <div className="d">
                                <h5> <span>PRICE</span> :- 50,0000 / </h5>
                            </div>
                            <div className="c mt-3">

                                <Link to='/book_holiday'><button className='btnn'> Contact_US </button></Link>

                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Mm8} alt="..." />
                            </div>
                            <div className="b">
                                <h5> VaishnoDevi </h5>

                            </div>
                            <div className="d">
                                <h5> <span>PRICE</span> :- 50,0000 / </h5>
                            </div>
                            <div className="c mt-3">
                                <Link to='/book_holiday'><button className='btnn'> Contact_US </button></Link>

                            </div>


                        </div>
                    </div>
                    {/* ================== */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Mm9} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Ujjain </h5>

                            </div>
                            <div className="d">
                                <h5> <span>PRICE</span> :- 50,0000 / </h5>
                            </div>
                            <div className="c mt-3">

                                <Link to='/book_holiday'><button className='btnn'> Contact_US </button></Link>

                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Mm10} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Rameshwaram </h5>

                            </div>
                            <div className="d">
                                <h5> <span>PRICE</span> :- 50,0000 / </h5>
                            </div>
                            <div className="c mt-3">

                                <Link to='/book_holiday'><button className='btnn'> Contact_US </button></Link>

                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Mm11} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Haridwar </h5>

                            </div>
                            <div className="d">
                                <h5> <span>PRICE</span> :- 50,0000 / </h5>
                            </div>
                            <div className="c mt-3">

                                <Link to='/book_holiday'><button className='btnn'> Contact_US </button></Link>

                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Mm12} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Rishikesh </h5>

                            </div>
                            <div className="d">
                                <h5> <span>PRICE</span> :- 50,0000 / </h5>
                            </div>
                            <div className="c mt-3">

                                <Link to='/book_holiday'><button className='btnn'> Contact_US </button></Link>

                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </>

    );
}

export default Destination_3;