import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import First from '../components/e-voting/first';
import HowToVote from '../components/e-voting/how-to-vote';
import Guarantee from '../components/e-voting/guarantee';
import Second from '../components/e-voting/second';
import Third from '../components/e-voting/third';
import Customer from '../components/e-voting/customer';
import Contact from "../components/home/contact"
function EVoting(){
    return (
        <div>
            <Navbar/>
            <First/>
            <HowToVote/>
            <Guarantee/>
            <Second/>
            <Third/>
            <Customer/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default EVoting;
