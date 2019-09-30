import React from "react"
import SEO from "../../components/seo"
import Header from "./components/header"
import Registration from "./components/registration"
import "../mlh-hack-day/styles/style.sass"
import Countdown from "./components/countdown"
import Footer from "./components/footer"

const MLH = () => {
  return(
   <div id="mlh-landing">
     <SEO title="Local Hack Day: Learn 2019 - October 12 | Major League Hacking | Amritapuri" />
     <Header />
     <Countdown deadline='October 12, 2019'/>
     <Registration />
     <Footer/>
   </div>
  )
}

export default MLH