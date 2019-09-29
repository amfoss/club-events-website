import React, { useState } from "react"
import './styles/style.sass'

import Header from './components/header'
import Map from './components/map'
import SEO from "../../components/seo"
import Countdown from "./components/countdown"
import Registration from "./components/registration"
import Footer from "./components/footer"

const Hacktoberfest = () => {
  return(
    <>
      <SEO title="Hacktoberfest 2019 - Meetup & BootCamp | Amritapuri | October 3" />
      <Header/>
      <Countdown deadline='October 3, 2019'/>
      <Map/>
      <Registration />
      <Footer/>
    </>
  )
}

export default Hacktoberfest;
