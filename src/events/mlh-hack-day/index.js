import React from "react"
import SEO from "../../components/seo"
import Header from "./components/header"
import Registration from "./components/registration"
import "../mlh-hack-day/styles/style.sass"

const MLH = () => {
  return(
   <div id="mlh-landing">
     <SEO title="Local Hack Day: Learn 2019 - October 12 | Major League Hacking | Amritapuri" />
     <Header />
     <Registration />
   </div>
  )
}

export default MLH