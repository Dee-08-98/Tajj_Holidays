import React from 'react';
import Themes_1 from '../../Component/Themes_1/Themes_1/Themes_1';
import Themes_2 from '../../Component/Themes_1/Themes_2/Themes_2';
import Jumbotron_2 from '../../Component/Themes_1/Jumbotron_2/Jumbotron_2';
import Footer from '../../Component/Home_Pg/Footer/Footer';

function Themes(props) {
    return (
      
        <div>
            <Jumbotron_2></Jumbotron_2>
            <Themes_1></Themes_1>
            <Themes_2></Themes_2>
            <Footer></Footer>

        </div>

      
    );
}

export default Themes;