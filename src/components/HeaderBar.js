import React from "react"
import NavigasiMenu from "./NavigasiMenu"

const HeaderBar = () => {
  return (
    <header style={{ border: "2px solid black" }}>
      <div>
        <h1>Haris Sucipto</h1>
        <p>Programmer Punya Cerita</p>
      </div>
      <NavigasiMenu />
    </header>
  )
}

export default HeaderBar
