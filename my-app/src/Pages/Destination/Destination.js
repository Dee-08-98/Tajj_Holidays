import React from 'react';
import Destination_1 from '../../Component/Destination_pg/Destination_1/Destination_1';
import Jumbotron_1 from '../../Component/Destination_pg/Jumbotron_1/Jumbotron_1';
import Footer from '../../Component/Home_Pg/Footer/Footer';
import Info from '../../Component/Destination_pg/Info/Info';

function Destination(props) {
    return (
        <>
        <div>
            <Jumbotron_1 heading='Destinations'></Jumbotron_1>
            <Info></Info>
            <Destination_1></Destination_1>
            <Footer></Footer>
        </div>
        </>
    );
}

export default Destination;