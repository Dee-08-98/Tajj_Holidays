import '../../../Component/Destination_pg/NestAgra/Aagra01.css'
import React, { useState , useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

function Aagra01({One,Two,Two1,Three,Three1, Four,Four1}) {

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
            <div   className="container mt-3 mb-5" id='toppkg'>
                <div   className="row MB-5">
                    <h2 data-aos="zoom-in"> {One} </h2>
                    <div data-aos="zoom-in" className="col-lg-3 mb-5" id='imag'>
                        <img src={Two} alt="..." />
                    </div>
                    <div data-aos="zoom-in" className="col-lg-4" id='nd'>
                        <h5>{Three}</h5>
                        <p>11.8km from Lorem ipsum dolor Airport</p>
                        <h6>An iconic hotel that is set amidst 6 acres of landscaped gardens. The hotel houses 100 rooms, most of which offer a view of the iconic Lorem ipsum. </h6>
                    </div>
                    <div data-aos="zoom-in" className="col-lg-3 mb-5" id='mid'>
                        <p className='mb-0'> <span className='dot'> </span> <span className='line'>	Rooms with view of the Lorem ipsum</span></p>
                        <p className='mb-0 mt-0'> <span className='dot'></span> <span className='line'>Indian, Continental & Chinese Cuisine</span></p>
                        <p className='mb-0 mt-0'> <span className='dot'>  </span> <span className='line'>		Selection of wines, spirits & cigars</span></p>
                        <p className='mb-0 mt-0'> <span className='dot'>  </span> <span className='line'>	3 km away from the Lorem ipsum</span></p>
                        <p className='mb-0 mt-0'> <span className='dot'> </span> <span className='line'>	Pet Friendly </span></p>


                    </div>
                    <div data-aos="zoom-in"   className="col-lg-2 mb-5" id='lst'>
                        <p> Starting rate/ night </p>
                        <h4> RS :- {Four}</h4>
                        <Link to='/book_holiday'> <button> Contact_Us </button> </Link>
                    </div>
                    <div data-aos="zoom-in" className="col-lg-3  mb-2 " id='imag'>
                        <img src={Two1} alt="..." />
                    </div>
                    <div data-aos="zoom-in" className="col-lg-4 mb-2" id='nd'>
                        <h5> {Three1} </h5>
                        <p>11.8km from Lorem ipsum dolor Airport</p>
                        <h6>Agra’s newest landmark, the Taj Hotel & Convention Centre, Agra, is here. To woo you with plush rooms & suites, exceptional restaurants, dedicated event spaces and magical views of Lorem ipsum. </h6>
                    </div>
                    <div data-aos="zoom-in" className="col-lg-3 mb-2 " id='mid'>
                        <p className='mb-0'> <span className='dot'>  </span> <span className='line'>		Walking distance to Lorem ipsum </span></p>
                        <p className='mb-0 mt-0'> <span className='dot'>  </span> <span className='line'>	Specialty restaurant serving cuisine from the kitchens of Lorem’s</span></p>
                        <p className='mb-0 mt-0'> <span className='dot'>  </span> <span className='line'>	Infinity pool overlooking Lorem Ipsum </span></p>
                        <p className='mb-0 mt-0'> <span className='dot'>  </span> <span className='line'>	3700 Sq meter of banqueting space with one of the largest banquet halls </span></p>
                    </div>
                    <div data-aos="zoom-in" className="col-lg-2 mb-2" id='lst'>
                        <p> Starting rate/ night </p>
                        <h4> RS :- {Four1}</h4>
                        <Link to='/book_holiday'> <button> Contact_Us </button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aagra01;