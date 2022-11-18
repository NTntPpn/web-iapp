import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import First from '../components/e-voting/first';
import HowToVote from '../components/e-voting/how-to-vote';
import Guarantee from '../components/e-voting/guarantee';
function EVoting(){
    return (
        <div>
            <Navbar/>
            <First/>
            <HowToVote/>
            <Guarantee/>
            <Footer/>

        </div>
    );
}

export default EVoting;
