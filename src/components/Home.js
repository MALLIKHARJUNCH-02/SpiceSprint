import React from "react";

import Nav from './Nav'
import Banner from './Banner';
import Category from './Category';
import TodaysDeals from './TodaysDeals';
import OurPronise from './OurPromise';
import Footer from './Footer';
import BottomNav from "./categories/BottomNav";

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Category />
            <TodaysDeals />
            <OurPronise />
            <Footer />
            <BottomNav/>
        </div>
    )
}


export default Home;