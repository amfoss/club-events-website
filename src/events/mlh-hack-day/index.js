import React from "react"
import SEO from "../../components/seo"
import Header from "./components/header"
import Registration from "./components/registration"
import "../mlh-hack-day/styles/style.sass"

const MLH = () => {
  return(
   <>
     <SEO title="Local Hack Day | MLH | amFOSS" />
     <Header />
     <Registration />
   </>
  )
}

export default MLH