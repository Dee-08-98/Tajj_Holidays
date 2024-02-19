import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import '../../Themes_1/Themes_1/Themes_1.css'
function Themes_1(props) {
    useEffect(() => {
        AOS.init({
            once:false,
            disable: "phone",
            duration: 1400,
            offset: 20,
            easing: 'ease-in-sine',
            delay: 20,
        });
    }, []);
    return (
        <>
        <div className="container mt-3 mb-0"id='Themes'>
        <Link to='/'><a className='pg mt-0'><span>Tajj_Holidays</span> </a></Link><span style={{color:'black',fontWeight:'900'}} className='fa fa-arrows-h'> Themes</span>
         <div className="row">
             <div className="col-lg-12">
                 <h2>Themes</h2>
                 <p data-aos="zoom-in">Watch your child’s face light up in golden sunlight as you build your first dream sandcastle together. Let time stand still as you journey across a lake and into a 16th century white marble palace. Discover architectural marvels on a Champagne tour, as peacocks strut by your side. Enjoy the romance of living in a rainforest where you walk through the clouds. Indulge in a wellness treatment, crafted using centuries of traditional knowledge. Feel a cold shiver run down your spine as you hear a tiger roar in the dense forest. Set your soul free to embrace the sheer magic of experiencing timeless traditions. Discover the perfect holiday, crafted just for you and your loved ones.</p>
             </div>
         </div>
        </div>
        </>
    );
}

export default Themes_1;