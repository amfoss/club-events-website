import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    navigate('/mlh/build/')
  }, [])
  return null;
}

export default IndexPage
