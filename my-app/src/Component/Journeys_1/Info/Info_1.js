import React, { useEffect, useState } from 'react';
import AOS from "aos";
// import "aos/dist/aos.css";
import '../../Journeys_1/Info/Info_1.css'
import { Link } from 'react-router-dom'
function Info_1(props) {
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
            <div className="container mt-3" id='Journey'>
                <Link to='/'><a className='pg mt-2'><span>Tajj_Holidays</span> </a></Link><span style={{ color: 'black', fontWeight: '900' }} className='fa fa-arrows-h '>Journeys</span>
                <div className="row">

                    <div className="col-lg-12 mb-5 mt-5">
                        <h2 >Itineraries</h2>

                        <p data-aos="zoom-in">Journey through India with specially curated holiday itineraries. Explore vibrant cultures, pristine natural wonders, opulent palaces and resplendent resorts. Rediscover India with Taj Holidays.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info_1;