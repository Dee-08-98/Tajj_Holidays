import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Destination_pg/Jumbotron_1/Jumbotron_1.css'
function Jumbotron_1({ heading }) {

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
            <div className="container-fluid pb-5" id="jumbodesti">
                <div className="container" id='innerContent'>
                    <div className='inner '>
                        <h2 data-aos="zoom-in">{heading}</h2>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Jumbotron_1;