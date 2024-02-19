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

import On2 from '../../../Component/Asset/Destination/ten.jpeg'
import On3 from '../../../Component/Asset/Destination/jai1.jpg'
import On4 from '../../../Component/Asset/Destination/jai2.jpg'
import On5 from '../../../Component/Asset/Destination/jai3.jpg'
import On9 from '../../../Component/Asset/Destination/jai4.jpg'
import On10 from '../../../Component/Asset/Destination/jai5.jpg'
import On11 from '../../../Component/Asset/Destination/jai6.jpg'
import On6 from '../../../Component/Asset/Destination/jai7.jpg'
import On7 from '../../../Component/Asset/Destination/jai8.jpg'
import On8 from '../../../Component/Asset/Destination/jai9.jpg'
function NestJaipur_pg(props) {
  const [go, setgo] = useState(false)

  const myfunc = () => {
    setgo(!go)
  }
  return (
    <div>
      <Jumbotron_1 heading=' Royal Place :- Jaipur '></Jumbotron_1>
      <Aagra0 destination='Jaipur' ></Aagra0>



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

            <Aagra01 One='Jaipur' Two={On} Two1={On1} Three='Taj Swarna' Three1='Taj Swarna & Convention Centre, Jaipur' Four='10,000' Four1='12,000'></Aagra01>
            <Aagra01 One='' Two={On} Two1={On1} Three='Royal Palace' Three1='Royal Palace & Convention Centre, Jaipur' Four='14,000' Four1='15,000'></Aagra01>

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

            <Agra1 One=' About Jaipur' Two='India’s famed pink city, with a unique character that is quintessentially Rajput, is more than a gateway to Rajasthan. Jaipur has a bit of everything, from the wonders of its many historic forts and palaces, to the rich vibrancy of local culture and bustling energy in its vivid bazaars.' Three={On2}></Agra1>

            <Aagra2 One={On3} One1='City Palace' Two={On4} Two1="Hawa Mahal" Three={On5} Three1='Galtaji Temple'></Aagra2>

            <Aagra4 One={On9} One1='Take a regal ride' Two={On10} Two1='Soar high' Three={On11} Three1='Explore local culture'></Aagra4>

            <Aagra3 One={On6} One1='Bedeck yourself in exquisite royal jewels' Two={On7} Two1='Discover inspired home décor' Three={On8} Three1='Bring home local colour'></Aagra3>

            <Footer></Footer>
          </>


      }

    </div>
  );
}

export default NestJaipur_pg;