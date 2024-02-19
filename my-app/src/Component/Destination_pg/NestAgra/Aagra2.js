import React, { useState , useEffect } from 'react';
import AOS from "aos";
// import one from '../../Asset/Destination/n1.jpeg'
// import one2 from '../../Asset/Destination/n2.jpeg'
// import one3 from '../../Asset/Destination/n3.jpeg'
import '../../Destination_pg/NestAgra/Aagra2.css'
import { Link } from 'react-router-dom';
function Aagra2({One,One1,Two,Two1,Three,Three1}) {
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
            <div className="container" id='Aagra2'>
                <div className="row">
                    <h5 data-aos="zoom-in"> Sight Seeing </h5>
                    <div  data-aos="zoom-in"  className="col-lg-4 col-md-6 mt-5">
                        <div className="a">
                            <img src={One} alt="" />
                        </div>
                        <div className="b">
                            <h6>{One1}</h6>
                        </div>
                        <div className="c">
                            {
                                show ? <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>One of the seven wonders of the modern world, the iconic Taj Mahal is a majestic memorial of Shah Jahan’s love for his wOne of the seven wonders of the modern world, the iconic Taj Mahal is a majestic memorial of Shah Jahan’s love for his wOne of the seven wonders of the modern world, the iconic Taj Mahal is a majestic memorial of Shah Jahan’s love for his w <Link><a onClick={myfunc} style={{ color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900' }}>Show Less</a></Link> </p>
                                    : <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>One of the seven wonders of the modern world, the iconic Taj Mahal is a majestic memorial of Shah Jahan’s love for his w  <Link><a onClick={myfunc} style={{ color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900' }}>Show More</a></Link> </p>
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
                                show2 ? <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>Renowned as the most famous of the Mughal emperors, Akbar the Great is said to have planned his tomb himself! The tomb i Renowned as the most famous of the Mughal emperors, Akbar the Great is said to have planned his tomb himself! The tomb i<Link><a onClick={myfunc2} style={{ color: 'green',textDecoration:'underline',border: 'none', fontWeight: '900' }}>Show Less</a></Link> </p>
                                    : <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>Renowned as the most famous of the Mughal emperors, Akbar the Great is said to have planned his tomb himself! The tomb i<Link><a onClick={myfunc2} style={{ color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900' }}>Show More</a></Link> </p>
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
                        <div className="c">
                        {
                                show1 ? <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>The tomb of Itmad-ud-Daulah is Agra’s hidden gem. Its beautiful stonework and inlay work is of the same style that was f. The tomb of Itmad-ud-Daulah is Agra’s hidden gem. Its beautiful stonework and inlay work is of the same style that was f. The tomb of Itmad-ud-Daulah is Agra’s hidden gem. Its beautiful stonework . <Link><a onClick={myfunc1} style={{ color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900'}}>Show Less</a></Link> </p>
                                    : <p style={{ color: 'black', fontWeight: '400', wordBreak: 'break-all', padding: '0px 15px', fontFamily: 'italic' }}>The tomb of Itmad-ud-Daulah is Agra’s hidden gem. Its beautiful stonework and inlay work is of the same style that was f.<Link><a onClick={myfunc1} style={{ color: 'green',textDecoration:'underline', border: 'none', fontWeight: '900' }}>Show More</a></Link> </p>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Aagra2;