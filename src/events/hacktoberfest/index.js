import React from "react"
import './styles/style.sass'

import Header from './components/header'
import Map from './components/map'

const Hacktoberfest = () => {

  return(
    <>
      <Header/>
      <Map/>
      <div>
        <h1 className="py-4 my-4 text-light text-center">#OctoberIsComing</h1>
      </div>
    </>
  )
}

export default Hacktoberfest;
