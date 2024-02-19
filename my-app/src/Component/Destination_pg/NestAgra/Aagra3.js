import React, { useState , useEffect } from 'react';
import AOS from "aos";
import '../../Destination_pg/NestAgra/Aagra3.css'
import { Link } from 'react-router-dom';

function Aagra3({ One, One1, Two, Two1, Three, Three1 }) {
    const [show, setshow] = useState(false)
    const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)

    function myfunc() {
        setshow(!show)
    }
    function myfunc1() {
        setshow1(!show1)
    } function myfunc2() {
        setshow2(!show2)
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
        <div>
            <div className="container mt-5" id='Aagra3'>
                <div className="row">
                    <h5 data-aos="zoom-in"> Shopping </h5>
                    <div  data-aos="zoom-in"  className="col-lg-4 col-md-6 mt-5">
                        <div className="a">
                            <img src={One} alt="" />
                        </div>
                        <div className="b">
                            <h6>{One1}</h6>
                        </div>
                        <div className="c">
                            {
                                show ? <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>The ancient art of embroidery using silver and gold threads was revived by the Mughals. Zardozi is used in exquisite, ro The ancient art of embroidery using silver and gold threads was revived by the Mughals. Zardozi is used in exquisite, ro <Link><a onClick={myfunc} style={{ color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900' }}>Show Less</a></Link> </p>
                                    : <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>The ancient art of embroidery using silver and gold threads was revived by the Mughals. Zardozi is used in exquisite, ro<Link><a onClick={myfunc} style={{color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900' }}>Show More</a></Link> </p>
                            }
                        </div>
                    </div>

                    <div  data-aos="zoom-in"  className="col-lg-4 col-md-6 mt-5">
                        <div className="a">
                            <img src={Two} alt="" />

                        </div>
                        <div className="b">
                            <h6>{Two1}</h6>
                        </div>
                        <div className="c">

                            {
                                show2 ? <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>Petha is believed to have originated in the kitchens of the legendary Shah Jahan. This traditional sweet is a translucen.Petha is believed to have originated in the kitchens of the legendary Shah Jahan. This traditional sweet is a translucen.<Link><a onClick={myfunc2} style={{ color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900' }}>Show Less</a></Link> </p>
                                    : <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>Petha is believed to have originated in the kitchens of the legendary Shah Jahan. This traditional sweet is a translucen.<Link><a onClick={myfunc2} style={{color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900' }}>Show More</a></Link> </p>
                            }
                        </div>
                    </div>

                    <div  data-aos="zoom-in"  className="col-lg-4 col-md-12 mt-5">
                        <div className="a">
                            <img src={Three} alt="" />

                        </div>
                        <div className="b">
                            <h6>{Three1}</h6>
                        </div>
                        <div  className="c">
                            {
                                show1 ? <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>The beauty and intricacy of marble inlay work is beautifully showcased across Mughal monuments in Agra, and you could juThe beauty and intricacy of marble inlay work is beautifully showcased across Mughal monuments in Agra, and you could ju <Link><a onClick={myfunc1} style={{color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900' }}>Show Less</a></Link> </p>
                                    : <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>The beauty and intricacy of marble inlay work is beautifully showcased across Mughal monuments in Agra, and you could ju<Link><a onClick={myfunc1} style={{ color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900' }}>Show More</a></Link> </p>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Aagra3;