import React from "react"
import { Link } from "gatsby"

const NavigasiMenu = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>
      <Link to="/blog">Blog</Link>
    </div>
  )
}

export default NavigasiMenu
