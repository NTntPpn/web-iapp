import React from 'react';
import Navbar from '../components/navbar';
import First from '../components/e-kyc/first';
import Feature from '../components/e-kyc/feature';
import AcEkyc from '../components/e-kyc/ac-ekyc';
import Twosystem from '../components/e-kyc/twosystem';
import Packagedetail from '../components/e-kyc/packagedetail';
import Customer from '../components/e-kyc/customer';
import Contact from "../components/home/contact"
import Footer from '../components/footer';

function EKYC() {
    return (
        <div>
            <Navbar/>
            <First/>
            <Feature/>
            <AcEkyc/>
            <Twosystem/>
            <Packagedetail/>
            <Customer/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default EKYC;
