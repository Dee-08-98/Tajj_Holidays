import React, { useState } from 'react';
import Jumbotron_1 from '../../../Component/Destination_pg/Jumbotron_1/Jumbotron_1';
import Agra1 from '../../../Component/Destination_pg/NestAgra/Agra1';
import Aagra0 from '../../../Component/Destination_pg/NestAgra/Aagra0';
import Aagra01 from '../../../Component/Destination_pg/NestAgra/Aagra01';
import Footer from '../../../Component/Home_Pg/Footer/Footer';

import On from '../../../Component/Asset/Incewdeble_Journey/it9.jpeg'
import On1 from '../../../Component/Asset/Incewdeble_Journey/it10.jpeg'
import On2 from '../../../Component/Asset/Destination/ninteen.jpeg'

function NestDarjelling_pg(props) {

  const [go, setgo] = useState(false)

  const myfunc = () => {
    setgo(!go)
  }

  return (
    <div>
      <Jumbotron_1 heading=' Place of Tea / Coffee :- Darjelling'></Jumbotron_1>
      <Aagra0 destination='Darjelling' ></Aagra0>



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

            <Aagra01 One='Darjelling' Two={On} Two1={On1} Three='Pratap Mahal,Darjelling-IHCL SeleQtions' Three1='Pratap Mahal & Convention Centre, Darjelling' Four='9,500' Four1='10,000'></Aagra01>
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

            <Agra1 One=' About Darjelling' Two='Located in the heart of Rajasthan, Ajmer has long been a stop for travellers searching for solace in its many wonderful sites of worship. This city envelopes the banks of the Ana Sagar Lake, is hugged by the mighty peaks of the Aravallis, and is also the ideal gateway to the holy town of Pushkar.' Three={On2}></Agra1>

            <Footer></Footer>
          </>


      }

    </div>
  );
}

export default NestDarjelling_pg;