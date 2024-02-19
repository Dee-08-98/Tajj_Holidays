import React, { useEffect } from 'react';
import AOS from "aos";
// import "aos/dist/aos.css";
import O1 from '../../Asset/Home_img/s1.jpeg'
import O2 from '../../Asset/Home_img/eight8.jpeg'
import O3 from '../../Asset/Home_img/g1.jpeg'
import O4 from '../../Asset/Home_img/nine9.jpeg'
import {Link} from 'react-router-dom'
import '../../Home_Pg/Popular_Destination/Popular_Destination.css'
function Popular_Destination(props) {
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
        <div className="container mt-0" id='Popular_Destination'>
         <div className="row">
         <h2 data-aos="zoom-in" >Popular Destination</h2>
             <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                 <div  data-aos="zoom-in"  className="card">
                     <div className="a">
                         <img src={O3} alt="......" />
                     </div>
                     <div className="b">
                        <h5>Goa</h5>
                         <Link to='NestGoa'><button> View Details</button></Link>
                     </div>
                 </div>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                 <div  data-aos="zoom-in"  className="card">
                     <div className="a">
                         <img src={O2} alt="..." />
                     </div>
                     <div className="b">
                        <h5>Rajasthan</h5>
                         <Link to='incredeble_Journey'><button> View Details</button></Link>
 
                     </div>
                 </div>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                 <div  data-aos="zoom-in"  className="card">
                     <div className="a">
                         <img src={O1} alt="..." />
                     </div>
                     <div className="b">
                        <h5>Rishikesh</h5>
                         <Link to='NestRelegious'><button> View Details</button></Link>
 
                     </div>
                 </div>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                 <div  data-aos="zoom-in"  className="card">
                     <div className="a">
                         <img src={O4} alt="..." />
                     </div>
                     <div className="b">
                        <h5>Shimla</h5>
                         <Link to='NestShimla'><button> View Details</button></Link>
 
                     </div>
                 </div>
             </div>
         </div>
        </div>
        </>
    );
}

export default Popular_Destination;