import React, { useState } from 'react';
import Jumbotron_1 from '../../../Component/Destination_pg/Jumbotron_1/Jumbotron_1';
import Agra1 from '../../../Component/Destination_pg/NestAgra/Agra1';
import Aagra2 from '../../../Component/Destination_pg/NestAgra/Aagra2';
import Aagra3 from '../../../Component/Destination_pg/NestAgra/Aagra3';
import Aagra0 from '../../../Component/Destination_pg/NestAgra/Aagra0';
import Aagra01 from '../../../Component/Destination_pg/NestAgra/Aagra01';
import Aagra4 from '../../../Component/Destination_pg/NestAgra/Aagra4';
import Footer from '../../../Component/Home_Pg/Footer/Footer';

import On from '../../../Component/Asset/Incewdeble_Journey/it9.jpeg'
import On1 from '../../../Component/Asset/Incewdeble_Journey/it10.jpeg'
import On2 from '../../../Component/Asset/Destination/kas6.jpeg'
import On3 from '../../../Component/Asset/Destination/ma1.jpg'
import On4 from '../../../Component/Asset/Destination/ma2.jpeg'
import On5 from '../../../Component/Asset/Destination/ma3.jpeg'
import On6 from '../../../Component/Asset/Destination/ma11.jpg'
import On7 from '../../../Component/Asset/Destination/ma10.jpg'
import On8 from '../../../Component/Asset/Destination/ma12.jpeg'
import On9 from '../../../Component/Asset/Destination/ma5.jpeg'
import On10 from '../../../Component/Asset/Destination/aj8.jpg'
import On11 from '../../../Component/Asset/Destination/ma6.jpeg'

function NestManali_pg(props) {

    const [go, setgo] = useState(false)

    const myfunc = () => {
        setgo(!go)
    }

    return (
        <div>
            <Jumbotron_1 heading=' Lovely Manali '></Jumbotron_1>
            <Aagra0 destination=' Manali' ></Aagra0>



            {
                go ?
                    <>

                        <div className="container d-flex justify-content-center">
                            <div className="row">
                                <div className="col-lg-12 ">
                                    <button onClick={() => myfunc()} className='mx-2 mt-5' style={{ color: 'white', backgroundColor: 'chocolate', fontWeight: '900', letterSpacing: '2px', padding: '6px 15px', border: 'none', boxShadow: 'none', textShadow:'1px 1px 1px black' }}> About </button>


                                </div>
                            </div>
                        </div>

                        <Aagra01 One=' Manali' Two={On} Two1={On1} Three='Pratap Mahal, Manali-IHCL SeleQtions' Three1='Pratap Mahal & Convention Centre,  Manali' Four='9,500' Four1='11,000'></Aagra01>
                        <Aagra01 One='' Two={On} Two1={On1} Three='Pratap Mahal, Manali-IHCL SeleQtions' Three1='Pratap Mahal & Convention Centre,  Manali' Four='14,500' Four1='12,000'></Aagra01>
                        <Footer></Footer>
                    </>

                    :
                    <>

                        <div className="container d-flex justify-content-center">
                            <div className="row">
                                <div className="col-lg-12 ">
                                    <button onClick={() => myfunc()} className='mx-2 mt-5' style={{ color: 'white', backgroundColor: 'chocolate', fontWeight: '900', letterSpacing: '2px', padding: '6px 15px', border: 'none', boxShadow: 'none' , textShadow:'1px 1px 1px black'}}> Packages </button>


                                </div>
                            </div>
                        </div>

                        <Agra1 One=' About Manali' Two='Manali is one of the most sought-after holiday destinations in the Himalayas. Situated at the foothills of the snow-capped slopes of the Pir Panjal and the Dhauladhar ranges, the town is blessed with extraordinary scenic beauty and serves as the gateway to the Lahaul and Spiti district as well as the city of Leh in Ladakh.' Three={On2}></Agra1>

                        <Aagra2 One={On3} One1='Hidimba Temple' Two={On4} Two1="Jogni Waterfall" Three={On5} Three1='Solong Velly'></Aagra2>


                        <Aagra4 One={On9} One1='Ziplining Experience' Two={On10} Two1='Treking' Three={On11} Three1='Ropeway in manali'></Aagra4>

                        <Aagra3 One={On6} One1='Pashmina Shawl' Two={On7} Two1='Himachli Cap' Three={On8} Three1='Prayer Flag'></Aagra3>

                        <Footer></Footer>
                    </>


            }

        </div>
    );
}

export default NestManali_pg;