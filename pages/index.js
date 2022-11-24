import Navbar from "../components/navbar"
import First from "../components/home/first"
import Product_Highlights from "../components/home/Product_Highlights"
import AI_items from "../components/home/API_items"
import Testplay from "../components/home/testplay"
import Blog from "../components/home/blog"
import Contact from "../components/home/contact"
import Footer from "../components/footer"
import Our_services from "../components/home/our_services"
import Sponsor from "../components/home/sponsor"
import Customer from "../components/home/customer"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <First/>
      <Product_Highlights/>
      <AI_items/>
      <Testplay/>
      <Our_services/>
      <Sponsor/>
      <Blog/>
      <Customer/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}