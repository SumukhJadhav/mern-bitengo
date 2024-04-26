import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'


export default function Home() {
  return (
    <div>
        <div> <Navbar/> </div>
        {/* <div>BODYYYY</div> */}
        <div><Carousel/></div>
        <div> <Cards/> </div>
        <div> <Cards/> </div>
        <div> <Cards/> </div>
        <div> <Cards/> </div>

        <div> <Footer/> </div>

    </div>
  )
}
