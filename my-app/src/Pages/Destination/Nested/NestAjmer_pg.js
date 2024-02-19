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
import On2 from '../../../Component/Asset/Destination/two.jpeg'
import On3 from '../../../Component/Asset/Destination/aj1.jpeg'
import On4 from '../../../Component/Asset/Destination/aj2.jpg'
import On5 from '../../../Component/Asset/Destination/aj3.jpg'
import On6 from '../../../Component/Asset/Destination/aj4.jpg'
import On7 from '../../../Component/Asset/Destination/aj5.jpg'
import On8 from '../../../Component/Asset/Destination/aj6.jpg'
import On9 from '../../../Component/Asset/Destination/aj7.jpg'
import On10 from '../../../Component/Asset/Destination/aj8.jpg'
import On11 from '../../../Component/Asset/Destination/aj9.jpeg'

function NestAjmer_pg(props) {

  const [go, setgo] = useState(false)

  const myfunc = () => {
    setgo(!go)
  }

  return (
    <div>
      <Jumbotron_1 heading='  heart of Rajasthan :- Ajmer '></Jumbotron_1>
      <Aagra0 destination='Ajmer' ></Aagra0>



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

            <Aagra01 One='Ajmer' Two={On} Two1={On1} Three='Pratap Mahal,Ajmer-IHCL SeleQtions' Three1='Pratap Mahal & Convention Centre, Ajmer' Four='9,500' Four1='10,000'></Aagra01>
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

            <Agra1 One=' About AJmer' Two='Located in the heart of Rajasthan, Ajmer has long been a stop for travellers searching for solace in its many wonderful sites of worship. This city envelopes the banks of the Ana Sagar Lake, is hugged by the mighty peaks of the Aravallis, and is also the ideal gateway to the holy town of Pushkar.' Three={On2}></Agra1>

            <Aagra2 One={On3} One1='Ajmer Sharif' Two={On4} Two1="Adhai-din-ka-Jhonpra" Three={On5} Three1='Nareli Jain Temple'></Aagra2>

            <Aagra4 One={On9} One1='Conquer a hill' Two={On10} Two1='Have a quiet evening' Three={On11} Three1='Take a day trip'></Aagra4>

            <Aagra3 One={On6} One1='Hit the bazaars' Two={On7} Two1='Bedeck yourself in colours' Three={On8} Three1='Dress up your walls'></Aagra3>

            <Footer></Footer>
          </>


      }

    </div>
  );
}

export default NestAjmer_pg;