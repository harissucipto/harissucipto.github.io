import React from "react"
import Saya from "../components/saya"

const FooterBar = () => {
  return (
    <footer style={{ borderTop: "2px solid black" }}>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <div style={{ maxWidth: "400px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100px", marginRight: "20px" }}>
              <Saya />
            </div>
            <div
              style={{
                maxWidth: "180px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h4>Salam!</h4>
              <p>Saya Haris seorang Front End Developer.</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <i>Connect with me :</i>
          <br />
          <ul>
            <li>
              <a href="https://github.com/harissucipto">Github</a>,
            </li>
            <li>Email: harisssucipto@gmail.com</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: ".75rem" }}>
        © {new Date().getFullYear()}, Craft By
        {` `}
        <a href="https://harissucipto.com">Haris Sucipto</a>
      </div>
    </footer>
  )
}

export default FooterBar
