import React from "react"
import Saya from "../components/saya"

const kontakSaya = [
  { name: "Github", link: "https://github.com/harissucipto" },
  { name: "Email", link: "mailto:harisssucipto@gmail.com" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/harissucipto/" },
  { name: "Instagram", link: "https://www.instagram.com/suciptoharis/" },
]

const background = {
  backgroundColor: "#fff",
  backgroundImage: "\nlinear-gradient(#eee .1em, transparent .1em)",
  backgroundSize: "100% 1.2em",
}

const FooterBar = () => {
  return (
    <footer style={{ borderTop: "2px solid black", ...background }}>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
          padding: "0px 20px",
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
            {kontakSaya.map(item => (
              <li key={item.name} style={{ margin: 0 }}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
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
