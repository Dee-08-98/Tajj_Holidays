import React from 'react';
import Carousel from '../../Component/Home_Pg/Carousel/Carousel';
import Experience1 from '../../Component/Experience_pg/Experience_pg/Experience1';
import ImgSection from '../../Component/Experience_pg/ImgSection/ImgSection';
import Navbar from '../../Component/Home_Pg/Navbar/Navbar';
import Footer from '../../Component/Home_Pg/Footer/Footer';
import Jumbotron_3 from '../../Component/Experience_pg/Jumbotron3/Jumbotron_3';

function Experience(props) {
    return (
        <div>
            <Jumbotron_3></Jumbotron_3>
           <Experience1></Experience1>
           <ImgSection></ImgSection>
            <Footer></Footer>

        </div>
    );
}

export default Experience;