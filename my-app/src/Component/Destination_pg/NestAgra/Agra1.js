import React, { useState , useEffect } from 'react';
import AOS from "aos";
import '../../Destination_pg/NestAgra/Agra1.css'
import { Link } from 'react-router-dom';
function Agra1({One,Two,Three}) {

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
        <div>
            <div  className="container mt-3" id='Aagra'>
                <div className="row">
                    
                    <div  data-aos="zoom-in"  className="col-lg-12 mt-5">
                        <div className="d">
                            <h6> {One} </h6>
                        </div>
                    </div>
                    <div  data-aos="zoom-in"  className="col-lg-6 mb-3">
                        <div className="b">
                            <p> {Two}</p>

                        </div>
                    </div>
                    <div  data-aos="zoom-in"  className="col-lg-6 mb-5">
                        <div className="c">
                            <img src={Three} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agra1;