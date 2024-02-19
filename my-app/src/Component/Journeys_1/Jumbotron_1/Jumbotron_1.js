import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Journeys_1/Jumbotron_1/Jumbotron_1.css'

function Jumbotron_1(props) {

   useEffect(() => {
      AOS.init({
          once: false,
          disable: "phone",
          duration: 1400,
          offset: 20,
          easing: 'ease-in-sine',
          delay: 20,
      });
  }, []);


    return (
       <>
        <div className="container-fluid active   bg-primary p-5" id="jumbojourny">
                <div className="container mt-5 mb-5" id='innerContent'>
                   <h2 data-aos="zoom-in" >Itineraries</h2>
                </div>

            </div>
       </>
    );
}

export default Jumbotron_1;