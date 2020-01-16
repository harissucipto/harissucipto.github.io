import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import HeaderBar from "../components/HeaderBar"
import FooterBar from "../components/FooterBar"
import "./layout.css"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <HeaderBar />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: "1144px",
        minHeight: "60vh",
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2em" }}>
        Pilih Chapter :
      </h2>
      <h2>About</h2>
      <p>
        Cerita Saya memperkenalkan diri saya bisa diliat{" "}
        <Link to="/about">disini</Link>
      </p>

      <h2>Work</h2>
      <p>
        Cerita Saya tentang pekerjaan, projek, alat yang biasa saya gunakan bisa
        diliat <Link to="/work">disini</Link>
      </p>

      <h2>Blog</h2>
      <p>
        Kumpulan Cerita tentang saya dan koding bisa liat{" "}
        <Link to="/blog">disini</Link>
      </p>
    </div>
    <FooterBar />
  </div>
)

export default IndexPage
