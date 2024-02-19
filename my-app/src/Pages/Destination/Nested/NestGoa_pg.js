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

import On2 from '../../../Component/Asset/Destination/nine_1.jpeg'
import On3 from '../../../Component/Asset/Destination/goa1.jpg'
import On4 from '../../../Component/Asset/Destination/goa2.jpg'
import On5 from '../../../Component/Asset/Destination/goa3.jpg'
import On9 from '../../../Component/Asset/Destination/goa4.jpg'
import On10 from '../../../Component/Asset/Destination/goa5.jpeg'
import On11 from '../../../Component/Asset/Destination/goa6.jpeg'
import On6 from '../../../Component/Asset/Destination/goa9.jpeg'
import On7 from '../../../Component/Asset/Destination/goa7.jpeg'
import On8 from '../../../Component/Asset/Destination/goa8.jpeg'
function NestGoa_pg(props) {
  const [go, setgo] = useState(false)

  const myfunc = () => {
    setgo(!go)
  }
  return (
    <div>
      <Jumbotron_1 heading=' City of enjoy :- Goa '></Jumbotron_1>
      <Aagra0 destination='Goa' ></Aagra0>


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

            <Aagra01 One='Goa' Two={On} Two1={On1} Three='Taj Swarna' Three1='Taj Swarna & Convention Centre, Goa' Four='13,000' Four1='15,000'></Aagra01>
            <Aagra01 One='' Two={On} Two1={On1} Three='Taj_Holidays' Three1='Taj_Holidays & Convention Centre, Goa' Four='12,000' Four1='17,000'></Aagra01>
            <Aagra01 One='' Two={On} Two1={On1} Three='Madhuban' Three1='Madhuban & Convention Centre, Goa' Four='14,000' Four1='19,000'></Aagra01>
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

            <Agra1 One=' About Goa' Two='Soft sands, shimmering waters and swaying palms: that is Goa for most people. But there’s more to discover in this tiny yet shining slice of India. Its Colonial past has left it with glorious architecture, and has given its food and culture a distinctive flavour that drips with joie de vivre.' Three={On2}></Agra1>

            <Aagra2 One={On3} One1='Old Goa' Two={On4} Two1="Braganza House" Three={On5} Three1='Reis Magos Fort'></Aagra2>

            <Aagra4 One={On9} One1='Uncover vintage Goa' Two={On10} Two1='Ride the waves' Three={On11} Three1='Discover the backwaters'></Aagra4>

            <Aagra3 One={On6} One1='Explore  night life' Two={On7} Two1='Find hand-painted tiles' Three={On8} Three1='Get a glimpse of local life'></Aagra3>

            <Footer></Footer>
          </>


      }

    </div>
  );
}

export default NestGoa_pg;