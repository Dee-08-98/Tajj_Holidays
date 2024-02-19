import React, { useState , useEffect } from 'react';
import AOS from "aos";
import { Link } from 'react-router-dom';
import '../../../Component/Home_Pg/Footer/Footer.css'

function Footer(props) {
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
            <div className='container-fluid ' id='foodFooter'>
                <div className='row ' id='fotr4'>

                <hr style={{border:'2px solid white',}}></hr>

                    <div data-aos="zoom-in"  className='col-lg-4 col-md-6 col-sm-6 ' id='fotr'>
                        <h3> Our Office </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elitlorem Lorem ipsum dolor sit.
                        </p>
                        <h6><i className="fa fa-home"></i> Badarpur Border Near toll plaza besides Bharat Petroleum</h6>
                        <h6><i className="fa fa-phone"></i> +1222 4545 / +91 8709345623</h6>
                        <h6><i className="fa fa-envelope-open"></i> Tajj Holidays108@gmail.com</h6>

                    </div>
                    <div data-aos="zoom-in"  className='col-lg-4 col-md-6 col-sm-6 ' id='fotr1'>
                        <h3> Quick Links </h3>
                        <p id='fotrp'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elitlorem Lorem ipsum dolor sit.
                        </p>
                        <Link to='/book_holiday' ><h6> Contact US </h6></Link>
                        <Link to='/destinations'><h6> Destinations </h6></Link>

                        <Link><h6> Privacy Policy </h6></Link>


                    </div>
                    <div data-aos="zoom-in"  className='col-lg-4  ' id='fotr1'>
                        <h3> Visit Time </h3>
                        <p id='fotrp'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elitlorem Lorem ipsum dolor sit.
                        </p>
                        <h6> <span>Monday - Friday</span> :- 08 AM - 11 PM</h6>
                        <h6> <span>Saturday - Sunday</span> :- 09 AM - 02 PM</h6>
                        {/* <h6><span>Free Home Delivery</span> :- In Radius of 5 Km </h6> */}

                    </div>
                    <div data-aos="zoom-in"  className='col-lg-12   mt-4 mb-2 pt-4' id='fotr2'>
                        <h2><span>Stay</span>Connected</h2>
                        <div class="row">
                            <div class="footer">
                                <p>
                                    <Link> <i className="fa fa-facebook mx-3" id='fa1'></i></Link>
                                    <Link><i className="fa fa-instagram mx-3" id='fa2'></i></Link>
                                    <Link><i className="fa fa-twitter mx-3" id='fa3'></i></Link>

                                    <Link> <i className="fa fa-whatsapp" id='fa4'></i></Link>
                                </p>
                            </div>
                            <h5 className="fa fa-copyright" id="copy"> All Copyright Reserved Tajj Holidays </h5>

                            <h6 id='footerDesign'> Designed By :- Deepak Kumar</h6><br />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;