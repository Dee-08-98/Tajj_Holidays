import React, { useState , useEffect } from 'react';
import AOS from "aos";
import { Link } from 'react-router-dom';
import '../../Destination_pg/Destination_1/Destination_1.css'
import Destination_2 from '../Destination_2/Destination_2';
import One from '../../Asset/Destination/one.jpeg'
import Two from '../../Asset/Destination/two.jpeg'
import Three from '../../Asset/Destination/three_1.jpeg'
import Four from '../../Asset/Destination/four.jpeg'
import Five from '../../Asset/Destination/five.jpeg'
import Nineteen from '../../Asset/Destination/ninteen.jpeg'
import Eight from '../../Asset/Destination/eight.jpeg'
import Nine from '../../Asset/Destination/nine_1.jpeg'

// import One from '../../Asset/Destination/one.jpeg'
function Destination_1(props) {

    const [showmore, setShowMore] = useState(false)

    const so = () => {
        setShowMore(!showmore)
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
            <div className="container pt-4" id='des1'>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={One} alt="......" />
                            </div>
                            <div className="b">
                                <h5> Aagra </h5>
                            </div>
                            <div className="c">

                                <Link to='/NestAagra'><button className='btnn'> View Details</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Two} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Ajmer </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestAjmer'><button className='btnn'> View Details</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Three} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Amritsar </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestAmritsar'><button className='btnn'> View Details</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mb-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Four} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Andman </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestAndman'><button className='btnn'> View Details </button></Link>
                            </div>

                        </div>
                    </div>


                    {/* ================= */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Five} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Bandhavgarh National Park </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestBandhavgarh'><button className='btnn'>   View Details </button></Link>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Nineteen} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Darjeeling </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestDarjelling'><button className='btnn'> View Details</button></Link>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Eight} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Dharamshala </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestDharamshala'><button className='btnn'> View Details</button></Link>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                        <div data-aos="zoom-in" className="card">
                            <div className="a">
                                <img src={Nine} alt="..." />
                            </div>
                            <div className="b">
                                <h5> Goa </h5>

                            </div>
                            <div className="c">

                                <Link to='/NestGoa'><button className='btnn'> View Details</button></Link>
                            </div>


                        </div>
                    </div>
                </div>
                <h6 className='mt-4'onClick={() => so()}><Link>{showmore ? null : <a style={{color:'chocolate',fontWeight:'900'}} id='next1'>SHOW MORE</a>} </Link></h6>
                {showmore ? <Destination_2></Destination_2> : null}
            </div>
        </>

    );
}

export default Destination_1;