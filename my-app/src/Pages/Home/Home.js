import React from 'react';
import Carousel from '../../Component/Home_Pg/Carousel/Carousel';
import Talj_Holidays from '../../Component/Home_Pg/Tajj_Holidays/Talj_Holidays';
import Featured_Offer from '../../Component/Home_Pg/Featured_Offer/Featured_Offer';
import Trending_Offers from '../../Component/Home_Pg/Trending_Offers/Trending_Offers';
import Popular_Destination from '../../Component/Home_Pg/Popular_Destination/Popular_Destination';
import Footer from '../../Component/Home_Pg/Footer/Footer';
function Home(props) {
    return (
        <div>
            <Carousel></Carousel>
            <Talj_Holidays></Talj_Holidays>
            <Featured_Offer></Featured_Offer>
            <Trending_Offers></Trending_Offers>
            <Popular_Destination></Popular_Destination>
            <Footer></Footer> 
        </div>
    );
}

export default Home;