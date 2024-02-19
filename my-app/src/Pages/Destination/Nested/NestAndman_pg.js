import React, { useState } from 'react';
import Jumbotron_1 from '../../../Component/Destination_pg/Jumbotron_1/Jumbotron_1';
import Agra1 from '../../../Component/Destination_pg/NestAgra/Agra1';
import Aagra0 from '../../../Component/Destination_pg/NestAgra/Aagra0';
import Aagra01 from '../../../Component/Destination_pg/NestAgra/Aagra01';
import Footer from '../../../Component/Home_Pg/Footer/Footer';

import On from '../../../Component/Asset/Incewdeble_Journey/it9.jpeg'
import On1 from '../../../Component/Asset/Incewdeble_Journey/it10.jpeg'

import On2 from '../../../Component/Asset/Destination/and1.jpg'

function NestAndman_pg(props) {
  const [go, setgo] = useState(false)

  const myfunc = () => {
    setgo(!go)
  }
  return (
    <div>
      <Jumbotron_1 heading=' Andman Nicobar Island '></Jumbotron_1>
      <Aagra0 destination='Andman' ></Aagra0>



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

            <Aagra01 One='Andman' Two={On} Two1={On1} Three='Taj Swarna' Three1='Taj Swarna & Convention Centre, Andman' Four='10,000' Four1='12,000'></Aagra01>
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

            <Agra1 One=' About Andman' Two='Tucked away in the Bay of Bengal, the splendidly isolated Andaman archipelago includes 300 islands, the largest of which is Havelock. Blessed with an abundant marine life, coral reefs, lush mangroves and thick rainforests, Havelock Island is home to pristine white-sand beaches – Radhanagar Beach has been as voted Asia’s finest and one the top ten beaches in the world - and exemplary diving sites. The island’s rich biodiversity promises long, languid days of leisure, serendipitous discoveries, underwater action and exceptional seafood.' Three={On2}></Agra1>

            <Footer></Footer>
          </>


      }

    </div>
  );
}

export default NestAndman_pg;