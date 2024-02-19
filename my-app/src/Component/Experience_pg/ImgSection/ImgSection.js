import React, { useEffect } from 'react';
import AOS from "aos";
// import "aos/dist/aos.css";
import '../../Experience_pg/ImgSection/ImgSection.css'
import s1 from '../../Asset/Experience/s_1.webp'
import s2 from '../../Asset/Experience/o4.jpg'
import s3 from '../../Asset/Experience/s_5.jpeg'
import s4 from '../../Asset/Experience/thirteen_1.jpeg'
import s5 from '../../Asset/Experience/ten10.jpeg'
import s6 from '../../Asset/Experience/s_4.webp'
import { Link } from 'react-router-dom';


function ImgSection(props) {

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
            <div className="container pt-4" id='imgsec'>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div  data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={s5} alt="......" />
                            </div>
                            <div className="b">
                                <h5>Beach Retreats</h5>
                                <p>Surrender to sun, surf, sand and happiness</p>
                            </div>
                            <div className="c">
                               
                                <Link to='/NestGoa'><button className='btnn'> View Details</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div  data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={s4} alt="..." />
                            </div>
                            <div className="b">
                                <h5>Hill Stations</h5>
                                <p>Discover the boundries of the hills</p>

                            </div>
                            <div className="c">
                               
                               <Link to='/NestManali'><button className='btnn'> View Details</button></Link>
                           </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div  data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={s6} alt="..." />
                            </div>
                            <div className="b">
                                <h5>Royal India</h5>
                                <p>Relive the royal heritage of India</p>

                            </div>
                            <div className="c">
                               
                               <Link to='/incredeble_Journey'><button className='btnn'> View Details</button></Link>
                           </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div  data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={s3} alt="..." />
                            </div>
                            <div className="b">
                                <h5>Wilderness Getaways</h5>
                                <p>Soak in the majesty of nature</p>

                            </div>
                            <div className="c">
                               
                               <Link to='/incredeble_Journey'><button className='btnn'> View Details</button></Link>
                           </div>

                        </div>
                    </div>


                    {/* ================= */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div  data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={s2} alt="..." />
                            </div>
                            <div className="b">
                                <h5>Culture Capitals</h5>
                                <p>Enchanting discoveries of an enduring legacy</p>

                            </div>
                            <div className="c">
                               
                               <Link to='/NestAagra'><button className='btnn'> View Details</button></Link>
                           </div>


                        </div>
                    </div>
                    <div   className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={s1} alt="..." />
                            </div>
                            <div className="b">
                                <h5>Urban Oasis</h5>
                                <p>Live the high life</p>

                            </div>
                            <div className="c">
                               
                               <Link to='/NestAndman'><button className='btnn'> View Details</button></Link>
                           </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImgSection;