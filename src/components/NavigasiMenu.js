import React from "react"
import { Link } from "gatsby"

const NavigasiMenu = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        margin: "0 40px",
        alignItems: "center",
        fontSize: "1.5rem",
      }}
    >
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/work">Work</Link>
      </div>
      <div>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  )
}

export default NavigasiMenu
