import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import '../../Experience_pg/Experience_pg/Experience1.css'
import { Link } from 'react-router-dom';

function Experience1(props) {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 1400,
            offset: 20,
            easing: 'ease-in-sine',
            delay: 20,
        });
    }, []);

    return (
        <>
        <div className="container mt-3"id='Experience'>
        <Link to='/'><a  className='pg mt-2'><span>Tajj_Holidays</span> </a></Link><span style={{color:'black',fontWeight:'900'}} className='fa fa-arrows-h'> Experiences</span>
         <div className="row">
             <div className="col-lg-12 mt-5">
                 <h2 >Experiences</h2>
                 <p  data-aos="zoom-in" > Step onto the soft, white sand beaches of a secluded private island. Discover the hidden secrets of mist-draped hills. Experience the unmatched luxury of living in an opulent palace, and the wonder of uncovering the heritage of a country steeped in history. Explore the incredible beauty of India’s great outdoors, where the tiger is master of all he surveys. Or revel in the joy of being surrounded by the sights and sounds of a thriving metropolis. Your search for a dream holiday ends here.</p>
             </div>
         </div>
        </div>
        </>
    );
}

export default Experience1;