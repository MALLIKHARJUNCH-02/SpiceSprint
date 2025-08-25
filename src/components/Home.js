import React from "react";

import Nav from './Nav'
import Banner from './Banner';
import Category from './Category';
import TodaysDeals from './TodaysDeals';
import OurPronise from './OurPromise';
import Footer from './Footer';


const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Category />
            <TodaysDeals />
            <OurPronise />
            <Footer />
        </div>
    )
}


export default Home;