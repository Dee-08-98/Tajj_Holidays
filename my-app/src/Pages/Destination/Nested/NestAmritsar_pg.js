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

import On2 from '../../../Component/Asset/Destination/am2.jpg'
import On3 from '../../../Component/Asset/Destination/three_1.jpeg'
import On4 from '../../../Component/Asset/Destination/am3.jpg'
import On5 from '../../../Component/Asset/Destination/am4.jpg'
import On9 from '../../../Component/Asset/Destination/am6.jpg'
import On10 from '../../../Component/Asset/Destination/am7.jpg'
import On11 from '../../../Component/Asset/Destination/am8.jpg'
import On6 from '../../../Component/Asset/Destination/aj5.jpg'
import On7 from '../../../Component/Asset/Destination/am9.jpg'
import On8 from '../../../Component/Asset/Destination/am10.jpg'
function NestAmritsar_pg(props) {
  const [go, setgo] = useState(false)

  const myfunc = () => {
    setgo(!go)
  }
  return (
    <div>
      <Jumbotron_1 heading=' spiritual centre of the Sikh community :- Amritsar '></Jumbotron_1>
      <Aagra0 destination='Amritsar' ></Aagra0>


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

            <Aagra01 One='Amritsar' Two={On} Two1={On1} Three='Taj Swarna' Three1='Taj Swarna & Convention Centre, Amritsar' Four='10,000' Four1='12,000'></Aagra01>
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

            <Agra1 One=' About Amritsar' Two='Immerse yourself in centuries of history at Amritsar. Home to the beautiful Golden Temple and the Jallianwalla Bagh monument, Amritsar is recognised as the spiritual centre of the Sikh community. This beautiful city was also an important hub of the freedom movement in India.' Three={On2}></Agra1>

            <Aagra2 One={On3} One1='Golden Temple' Two={On4} Two1="Jallianwala Bagh" Three={On5} Three1='Ram Bagh Gardens'></Aagra2>

            <Aagra4 One={On9} One1='Glimpse into history' Two={On10} Two1='Experience an incredible meal' Three={On11} Three1='Visit the Wagah Border'></Aagra4>

            <Aagra3 One={On6} One1='Treat yourself to traditional footwear' Two={On7} Two1='Indulge in beautiful jewellery' Three={On8} Three1='Bdeck yourself in colours'></Aagra3>

            <Footer></Footer>
          </>


      }

    </div>
  );
}

export default NestAmritsar_pg;