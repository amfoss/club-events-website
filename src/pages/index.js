import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    navigate('/mlh/')
  }, [])
  return null;
}

export default IndexPage
