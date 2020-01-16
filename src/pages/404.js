import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "20px" }}>
        <h1>Tidak Ditemukan</h1>
        <p>Yang Kamu Cari Tidak Ketemukan</p>
        <Link to="/">Balik Ke Awal.</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
