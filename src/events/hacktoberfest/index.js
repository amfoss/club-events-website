import React from "react"
import './styles/style.sass'

import Header from './components/header'
import Map from './components/map'
import SEO from "../../components/seo"

const Hacktoberfest = () => {
  return(
    <>
      <SEO title="Hacktoberfest" />
      <Header/>
      <Map/>
      <div>
        <h1 className="py-4 my-4 text-light text-center">#OctoberIsComing</h1>
      </div>
    </>
  )
}

export default Hacktoberfest;
