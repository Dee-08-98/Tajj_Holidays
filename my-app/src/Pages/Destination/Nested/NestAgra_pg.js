import React, { useState } from 'react';
import Jumbotron_1 from '../../../Component/Destination_pg/Jumbotron_1/Jumbotron_1';
import Agra1 from '../../../Component/Destination_pg/NestAgra/Agra1';
import Aagra2 from '../../../Component/Destination_pg/NestAgra/Aagra2';
import Aagra3 from '../../../Component/Destination_pg/NestAgra/Aagra3';
import Aagra0 from '../../../Component/Destination_pg/NestAgra/Aagra0';
import Aagra01 from '../../../Component/Destination_pg/NestAgra/Aagra01';
import Footer from '../../../Component/Home_Pg/Footer/Footer';

import On from '../../../Component/Asset/Incewdeble_Journey/it9.jpeg'
import On1 from '../../../Component/Asset/Incewdeble_Journey/it10.jpeg'
import On2 from '../../../Component/Asset/Destination/one.jpeg'
import On3 from '../../../Component/Asset/Destination/n1.jpeg'
import On4 from '../../../Component/Asset/Destination/n2.jpeg'
import On5 from '../../../Component/Asset/Destination/n3.jpeg'
import On6 from '../../../Component/Asset/Destination/n4.jpeg'
import On7 from '../../../Component/Asset/Destination/n5.jpeg'
import On8 from '../../../Component/Asset/Destination/n6.webp'

function NestAgra_pg(props) {
  const [go, setgo] = useState(false)

  const myfunc = () => {
    setgo(!go)
  }


  return (
    <div>
      <Jumbotron_1 heading=' Capital of Romance :- Aagra'></Jumbotron_1>
      <Aagra0 destination='Aagra' ></Aagra0>



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

            <Aagra01 One='Aagra' Two={On} Two1={On1} Three='Tajview, Agra-IHCL SeleQtions' Three1='Taj Hotel & Convention Centre, Agra' Four='14,500' Four1='15,000'></Aagra01>
            <Footer></Footer>
          </>

          :
          <>


            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-lg-12 ">
                  <button onClick={() => myfunc()} className='mx-2 mt-5' style={{ color: 'white', backgroundColor: 'chocolate', fontWeight: '900', letterSpacing: '2px', padding: '6px 15px', border: 'none', boxShadow: 'none', textShadow:'1px 1px 1px black' }}> Packages</button>


                </div>
              </div>
            </div>

            <Agra1 One=' About Aagra' Two='The Taj Mahal has made Agra India’s capital of romance, but there is more to the city than this spectacular monument. Discover its hidden marvels, like Akbar’s Tomb and the ‘Baby Taj’, lose yourself in its lovely food and glittering bazaars, and journey into the old Mughal capital of Fatehpur Sikri.' Three={On2}></Agra1>

            <Aagra2 One={On3} One1='The Taj Mahal' Two={On4} Two1="Akbar's Tomb" Three={On5} Three1='Tomb of Itmad-ud-Daulah'></Aagra2>
            <Aagra3 One={On6} One1='Take home zardozi embroidery' Two={On7} Two1='Pick up petha' Three={On8} Three1='Buy a piece of the Taj Mahal'></Aagra3>
            <Footer></Footer>
          </>


      }

    </div>
  );
}

export default NestAgra_pg;