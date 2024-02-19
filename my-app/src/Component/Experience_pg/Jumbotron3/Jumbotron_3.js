import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../../Component/Experience_pg/Jumbotron3/Jumbotron_3.css'
function Jumbotron_3(props) {

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
        <div className="container-fluid pb-5" id="jumboexp">
            <div className="container" id='innerContent'>
                <div className='inner '>
                    <h2 data-aos="zoom-in" >Experiences</h2>
                </div>
            </div>

        </div>
    </>
    );
}

export default Jumbotron_3;