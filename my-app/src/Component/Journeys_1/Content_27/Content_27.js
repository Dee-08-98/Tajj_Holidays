import React, { useEffect, useState } from 'react';
import AOS from "aos";
// import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import '../../Journeys_1/Content_27/Content_27.css'
import One from '../../Asset/Incewdeble_Journey/it2.avif'
function Content_27(props) {
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
        <div className="container mt-5" id='contentlast'>
            <div className="row">
                <h2 data-aos="zoom-in" id='inf'> Incredible  Journeys  <span>:-  Amritsar, Chandigarh & Shimla</span> </h2>
                <div data-aos="zoom-in" className="col-lg-6 mt-5">
                    <div className="a">
                        <img src={One} alt="..." />
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div data-aos="zoom-in" className="b">
                        <h3 id='head'> Northern Trail (Amritsar, Chandigarh & Shimla)</h3>
                        {more ? <p className='mt-3 ' style={{ color: 'black', fontWeight: 500 }}>Hear the bells ringing from the evening aarti, the lap of water against the ghats and the bustle from the markets of the divine cities of Uttarakhand. Experience the quintessential.Hear the bells ringing from the evening aarti, the lap of water against the ghats and the bustle from the markets of the divine cities of Uttarakhand. Experience the quintessential.Hear the bells ringing from the evening aarti, the lap of water against the ghats and the bustle from the markets of the divine cities of Uttarakhand. Experience the quintessential <Link> <a style={{ color: 'chocolate', fontWeight: '900' }} onClick={() => myfunc()}><span style={{ color: 'black' }}></span>Show Less</a></Link> </p>
                            : <p className='mt-3 ' style={{ color: 'black', fontWeight: 500 }}>Immerse yourself in centuries of history at Taj Swarna, Amritsar. Home to the beautiful Golden Temple, Amritsar is recognised as one of the foremost spiritual centres . Relax and r <Link> <a style={{ color: 'chocolate', fontWeight: '900' }} onClick={() => myfunc()}> <span style={{ color: 'black' }}></span> Show More</a></Link> </p>
                        }
                        <p className='pkg'> <span className='fa fa-calendar'> Package Validity Date :- </span> 1st January 2024 - 31st December 2024 </p>
                        <p className='slhot'> Select Hotel <br /> <span>Amritsar / Shimla / Chandigarh</span> </p>

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
                        <div className="col-lg-4 " id='bt'>
                            <div className="d">
                                <h6 id='pkginfolast'>Package Rate :- 45,000   </h6>
                                <Link to='/book_holiday'><button id='btbtnlast' className='mt-2'> Contact_Us </button></Link> 

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>
    );
}

export default Content_27;