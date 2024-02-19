import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Home_Pg/Tajj_Holidays/Tajj_Holidays.css'
function Talj_Holidays(props) {

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
            <div className="container mt-5" id='Tajj_Holidays'>
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Tajj Holidays</h2>
                        <p data-aos="zoom-in" >Create memories for a lifetime. Watch your child’s face light up in the golden sunlight as you build your first dream sandcastle together on a Tajj Holiday. Let time stand still as you travel across a lake to a 16th century white marble palace. Discover architectural marvels on a Champagne tour, as peacocks strut by your side. Enjoy the romance of living in a rainforest while you walk through the clouds. Feel a cold shiver run down your spine as you hear a tiger roar in the dense forest. Indulge in a wellness treatment, crafted using centuries of traditional knowledge. Set your soul free to embrace the sheer magic of experiencing timeless traditions. Realize cherished moments for a lifetime with every Tajj Holiday, crafted with impeccable details just for you and your loved ones.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Talj_Holidays;