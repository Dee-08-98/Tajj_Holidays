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

import On2 from '../../../Component/Asset/Destination/eleven.jpeg'
import On3 from '../../../Component/Asset/Destination/jod1.jpg'
import On4 from '../../../Component/Asset/Destination/jod2.jpg'
import On5 from '../../../Component/Asset/Destination/jod3.jpg'
import On9 from '../../../Component/Asset/Destination/jod9.jpg'
import On10 from '../../../Component/Asset/Destination/jod8.jpg'
import On11 from '../../../Component/Asset/Destination/jod10.jpg'
import On6 from '../../../Component/Asset/Destination/jod4.jpeg'
import On7 from '../../../Component/Asset/Destination/jod5.jpg'
import On8 from '../../../Component/Asset/Destination/jod6.jpeg'
function NestJodhpur_pg(props) {
  const [go, setgo] = useState(false)

  const myfunc = () => {
    setgo(!go)
  }
  return (
    <div>
      <Jumbotron_1 heading=' City of Fort :- Jodhpur '></Jumbotron_1>
      <Aagra0 destination='Jodhpur' ></Aagra0>


      {
        go ?
          <>

            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-lg-12 ">
                  <button onClick={() => myfunc()} className='mx-2 mt-5' style={{ color: 'white', backgroundColor: 'chocolate', fontWeight: '900', letterSpacing: '2px', padding: '6px 15px', border: 'none', boxShadow: 'none' , textShadow:'1px 1px 1px black'}}> About </button>


                </div>
              </div>
            </div>

            <Aagra01 One='Jodhpur' Two={On} Two1={On1} Three='Taj Swarna' Three1='Taj Swarna & Convention Centre, Jodhpur' Four='10,000' Four1='12,000'></Aagra01>
            <Aagra01 One='' Two={On} Two1={On1} Three='Royal Swarna' Three1='Royal Swarna & Convention Centre, Jodhpur' Four='14,000' Four1='16,000'></Aagra01>
            <Footer></Footer>
          </>

          :
          <>

            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-lg-12 ">
                  <button onClick={() => myfunc()} className='mx-2 mt-5' style={{ color: 'white', backgroundColor: 'chocolate', fontWeight: '900', letterSpacing: '2px', padding: '6px 15px', border: 'none', boxShadow: 'none', textShadow:'1px 1px 1px black' }}> Packages </button>


                </div>
              </div>
            </div>

            <Agra1 One=' About Jodhpur' Two='The historic blue city of Jodhpur is a gateway to the seemingly endless Thar Desert. The impressive Mehrangarh Fort looms large over the bright blue homes, and is the crown jewel of the city’s many architectural gems. Jodhpur also has terrific shopping options and delicious local foods.' Three={On2}></Agra1>

            <Aagra2 One={On3} One1='Mehrangarh Fort' Two={On4} Two1="Umaid Bhawan Palace" Three={On5} Three1='Jaswant Thada'></Aagra2>

            <Aagra4 One={On9} One1='Camel Ride' Two={On10} Two1='Traditional dance ' Three={On11} Three1='Traditional wear'></Aagra4>

            <Aagra3 One={On6} One1='Delight in vintage treasures' Two={On7} Two1='Buy some bangles' Three={On8} Three1='Shop for a cause'></Aagra3>

            <Footer></Footer>
          </>


      }

    </div>
  );
}

export default NestJodhpur_pg;