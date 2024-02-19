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
import On3 from '../../../Component/Asset/Destination/ban2.jpeg'
import On4 from '../../../Component/Asset/Destination/ban3.jpg'
import On5 from '../../../Component/Asset/Destination/ban4.jpg'
import On6 from '../../../Component/Asset/Destination/ma11.jpg'
import On7 from '../../../Component/Asset/Destination/ma10.jpg'
import On8 from '../../../Component/Asset/Destination/ma12.jpeg'
import On9 from '../../../Component/Asset/Destination/ban5.jpg'
import On10 from '../../../Component/Asset/Destination/ban6.jpg'
import On11 from '../../../Component/Asset/Destination/ban7.jpg'

function NestJim_Corbett(props) {

  const [go, setgo] = useState(false)

  const myfunc = () => {
    setgo(!go)
  }

  return (
    <div>
      <Jumbotron_1 heading=' Jim_Corbett '></Jumbotron_1>
      <Aagra0 destination='Jim_Corbett' ></Aagra0>
     

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

            <Aagra01 One='Jim_Corbett' Two={On} Two1={On1} Three='Jammu Swarna' Three1='Jammu Swarna & Convention Centre, Jammu & Kashmir' Four='10,000' Four1='12,000'></Aagra01>
            <Aagra01 One='' Two={On} Two1={On1} Three='Haven' Three1='Haven Place & Convention Centre, Jammu & Kashmir' Four='14,000' Four1='16,000'></Aagra01>
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

            <Agra1 One=' About Jim_Corbett' Two='Tucked away in the foothills of the Himalayas, the Jim Corbett National Park is rich in not only wildlife, but also history. The oldest national park in the country and the first member of the wonderful Project Tiger initiative, Corbett provides safe haven to the royal Bengal tiger as well as leopards, golden jackals and many more creatures of the wild.' Three={On2}></Agra1>

            <Aagra2 One={On3} One1='Jim_Corbett National Park' Two={On4} Two1="Beyond the tiger" Three={On5} Three1='Local interactions'></Aagra2>

            <Aagra4 One={On9} One1='Keep your eyes peeled' Two={On10} Two1='Ride an elephant' Three={On11} Three1='Set your own trail'></Aagra4>

            <Aagra3 One={On6} One1='Delight in vintage treasures' Two={On7} Two1='Buy some Woolen Clothes' Three={On8} Three1='Shop for a cause'></Aagra3>

            <Footer></Footer>
          </>


      }

    </div>
  );
}

export default NestJim_Corbett;