import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Themes_1/Jumbotron_2/Jumbotron_2.css'
function Jumbotron_2(props) {

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
        <div  className="container-fluid active   bg-primary p-5" id="jumbothemes">
                <div  className="container mt-5 mb-5" id='innerContent'>
                   <h2 data-aos="zoom-in"  >Woyage</h2>
                </div>

            </div>
       </>
    );
}

export default Jumbotron_2;