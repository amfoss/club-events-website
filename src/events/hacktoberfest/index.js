import React, { useState } from "react"
import './styles/style.sass'

import Header from './components/header'
import Map from './components/map'
import SEO from "../../components/seo"
import Countdown from "./components/countdown"
import Registration from "./components/registration"

const Hacktoberfest = () => {
  const [deadline , setDeadline] = useState('October 3, 2019')
  return(
    <>
      <SEO title="Hacktoberfest" />
      <Header/>
      <Countdown deadline={deadline}/>
      <Map/>
      <Registration />
      <div>
        <h1 className="py-4 my-4 text-light text-center">#OctoberIsComing</h1>
      </div>
    </>
  )
}

export default Hacktoberfest;
