import React from "react"
import NavigasiMenu from "./NavigasiMenu"

const HeaderBar = () => {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        justifyContent: "center",
        marginBottom: "1.2rem",
        paddingBottom: "20px",
      }}
    >
      <header
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1144px",
          margin: "0 auto",
        }}
      >
        <div style={{ minWidth: "500px", margin: "20px 0px 0px 20px" }}>
          <h1>Haris Sucipto</h1>
          <p>Ceritanya pengalaman jadi programmer </p>
        </div>
        <NavigasiMenu />
      </header>
    </div>
  )
}

export default HeaderBar
