import React, { useEffect, useState } from 'react';
import AOS from "aos";
// import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import '../../Journeys_1/Content_23/Content_23.css'
import One from '../../Asset/Incewdeble_Journey/it10.jpeg'
function Content_23(props) {
    const [more, setMore] = useState(false)
    const myfunc = () => {
        setMore(!more)
    }
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
        <div className="container mt-5" id='contentfour'>
            <div className="row">
                <h2 data-aos="zoom-in" id='inf'>  <span> Aravalli Trails :- </span> Ajmer & Jaipur SeleQtions Itinerary </h2>
                <div data-aos="zoom-in" className="col-lg-6 mt-5">
                    <div className="a">
                        <img src={One} alt="..." />
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div data-aos="zoom-in" className="b">
                        <h3 id='head'>Mughal Circuit - New Delhi, Agra & Jaipur SeleQtions Itinerary</h3>
                        {more ? <p className='mt-3 ' style={{ color: 'black', fontWeight: 500 }}>Hear the bells ringing from the evening aarti, the lap of water against the ghats and the bustle from the markets of the divine cities of Uttarakhand. Experience the quintessential.Hear the bells ringing from the evening aarti, the lap of water against the ghats and the bustle from the markets of the divine cities of Uttarakhand. Experience the quintessential.Hear the bells ringing from the evening aarti, the lap of water against the ghats and the bustle from the markets of the divine cities of Uttarakhand. Experience the quintessential <Link> <a style={{ color: 'chocolate', fontWeight: '900' }} onClick={() => myfunc()}><span style={{ color: 'black' }}></span>Show Less</a></Link> </p>
                            : <p className='mt-3 ' style={{ color: 'black', fontWeight: 500 }}>Discover the majestic charm of Pratap Mahal, Ajmer- IHCL SeleQtions, where Rajasthani hospitality and opulence converge to create an unforgettable retreat. Immerse yourself in the <Link> <a style={{ color: 'chocolate', fontWeight: '900' }} onClick={() => myfunc()}> <span style={{ color: 'black' }}></span> Show More</a></Link> </p>
                        }
                        <p className='pkg'> <span className='fa fa-calendar'> Package Validity Date :- </span> 1st January 2024 - 31st December 2024 </p>
                        <p className='slhot'> Select Hotel <br /> <span> Jaipur / Ajmer </span> </p>

                        <div className="col-lg-8 pt-4" id='conclu'>
                            <h6>Inclusions</h6>
                            <div className="c">
                                <h5 className='pt-2'> <span className='fa fa-bed'></span > <span className='facont mx-1'> Stay </span>
                                    <span className='fa fa-cutlery'></span > <span className='facont mx-1'> Dining </span>
                                    <span className='fa fa-bed'></span > <span className='facont mx-1'> Sightseeing </span>

                                </h5>
                                <h5 className='pt-2'> <span className='fa fa-bed'></span > <span className='facont mx-1'> Convenience </span> </h5>
                            </div>
                        </div>
                        <div className="col-lg-4 "id='bt'>
                            <div className="d">
                                <h6 id='pkginfofour'>Package Rate :- 42,500   </h6>
                                <Link to='/book_holiday'><button id='btbtnfour'  className='mt-2'> Contact_Us </button></Link>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>
    );
}

export default Content_23;