import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Contact from '../components/contact/contact';
import Address from '../components/contact/address';
import Whoami from '../components/contact/Whoami';
function Contactmain(){
    return (
        <div>
            <Navbar/>
            <Contact/>
            <Address/>
            <Whoami/>
            <Footer/>
        </div>
    );
}

export default Contactmain;
