import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    navigate('/hacktoberfest/')
  }, [])
  return null;
}

export default IndexPage
