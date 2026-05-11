import React from 'react'
import Logo from '../Logo/Logo'
import Banner from '../Banner/Banner'
import HowItWorks from '../HowItWorks/HowItWorks'
import OurServices from '../OurServices/OurServices'
import BrandMarquee from '../BrandsHelping/BrandMarquee'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <BrandMarquee></BrandMarquee>
    </div>
  )
}

export default Home