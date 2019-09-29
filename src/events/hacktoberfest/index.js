import React, { useState } from "react"
import './styles/style.sass'

import Header from './components/header'
import Map from './components/map'
import SEO from "../../components/seo"
import Countdown from "./components/countdown"
import Registration from "./components/registration"

const Hacktoberfest = () => {
  return(
    <>
      <SEO title="Hacktoberfest" />
      <Header/>
      <Countdown deadline='October 3, 2019'/>
      <Map/>
      <Registration />
      <div>
        <h1 className="py-4 my-4 text-light text-center">#OctoberIsComing</h1>
      </div>
    </>
  )
}

export default Hacktoberfest;
