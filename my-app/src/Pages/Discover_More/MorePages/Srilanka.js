import React, { useState } from 'react';

import Footer from '../../../Component/Home_Pg/Footer/Footer';
import Jumbotron from '../../../Component/Discover_More/Srilanka/Jumbotron';


import Agra1 from '../../../Component/Destination_pg/NestAgra/Agra1';
import Aagra2 from '../../../Component/Destination_pg/NestAgra/Aagra2';
import Aagra3 from '../../../Component/Destination_pg/NestAgra/Aagra3';
import Aagra01 from '../../../Component/Destination_pg/NestAgra/Aagra01';
import Aagra4 from '../../../Component/Destination_pg/NestAgra/Aagra4';

import On from '../../../Component/Asset/Incewdeble_Journey/it9.jpeg'
import On1 from '../../../Component/Asset/Incewdeble_Journey/it10.jpeg'
import On2 from '../../../Component/Asset/Destination/s1.avif'
import On3 from '../../../Component/Asset/Destination/s2.avif'
import On4 from '../../../Component/Asset/Destination/sl6.avif'
import On5 from '../../../Component/Asset/Destination/aj3.jpg'
import On6 from '../../../Component/Asset/Destination/sl3.webp'
import On7 from '../../../Component/Asset/Destination/m10.avif'
import On8 from '../../../Component/Asset/Destination/aj6.jpg'
import On9 from '../../../Component/Asset/Destination/sl2.avif'
import On10 from '../../../Component/Asset/Destination/aj8.jpg'
import On11 from '../../../Component/Asset/Destination/sl4.avif'
import Info from '../../../Component/Discover_More/Info';


function Srilanka(props) {

  const [go, setgo] = useState(false)

  const myfunc = () => {
    setgo(!go)
  }

  return (
    <div>
      <Jumbotron ></Jumbotron>

      <Info destination='Srilanka' ></Info>



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

            <Aagra01 One='Srilanka' Two={On} Two1={On1} Three='Pratap Mahal,Ajmer-IHCL SeleQtions' Three1='Pratap Mahal & Convention Centre, Srilanka' Four='9,500' Four1='10,000'></Aagra01>
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

            <Agra1 One=' About Srilanka' Two='Sri Lanka is a land of legends. Believed to be the home of Ravana from the Indian epic, Ramayana, the sandbanks of Adam’s Bridge reputedly once linked this island nation to India. Sri Lanka’s largest city, Colombo, reflects this legacy, offering a great mix of the past and the present.' Three={On2}></Agra1>

            <Aagra2 One={On3} One1='National Museum' Two={On4} Two1="Fort" Three={On5} Three1='Kelaniya Raja Maha Vihara'></Aagra2>

            <Aagra4 One={On9} One1='Have a quiet afternoon' Two={On10} Two1='Take in a beautiful sunset' Three={On11} Three1='Go whale-watching'></Aagra4>

            <Aagra3 One={On6} One1='Take home a decorative local mask' Two={On7} Two1='Explore a local shopping institution' Three={On8} Three1='Find a slice of paradise'></Aagra3>

            <Footer></Footer>

          </>


      }


    </div>
  );
}


export default Srilanka;