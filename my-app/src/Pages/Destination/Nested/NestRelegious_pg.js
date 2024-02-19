import React from 'react';
import Jumbotron_1 from '../../../Component/Destination_pg/Jumbotron_1/Jumbotron_1';
import Aagra0 from '../../../Component/Destination_pg/NestAgra/Aagra0';
import Agra1 from '../../../Component/Destination_pg/NestAgra/Agra1';
import Destination_3 from '../../../Component/Destination_pg/Destination_3/Destination_3';
import Footer from '../../../Component/Home_Pg/Footer/Footer';
import On2 from '../../../Component/Asset/Destination/twenty.jpeg'


function NestRelegious_pg(props) {
    return (
        <div>
      <Jumbotron_1 heading='Oom Namo Bhagwate wasudevay namah'></Jumbotron_1>
      <Aagra0 destination='Relegious_Tour'></Aagra0>
      <Agra1 One=' About Relegious_Tour' Two='Located in the heart of India, Kashi has long been a stop for travellers searching for solace in its many wonderful sites of worship. This city envelopes the banks of the Holy River, is hugged by the mighty peaks of the Aravallis, and is also the ideal gateway to the holy town of India.' Three={On2}></Agra1>
      <Destination_3></Destination_3>
      <Footer></Footer>
        </div>
    );
}

export default NestRelegious_pg;