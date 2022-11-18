import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Br1 from '../components/blog/br1';
import Br2 from '../components/blog/br2';
function Blog(){
    return (
        <div>
            <Navbar/>
            <Br1/>
            <Br2/>
            <Footer/>
        </div>
    );
}

export default Blog;
