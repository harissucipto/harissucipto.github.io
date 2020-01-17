import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <div>
      <SEO title="Blog" />
      <Layout>
        <h2>Blog</h2>
        <p>Di bawah ini merupakan list blog saya: </p>
        <ul>
          <li>
            {" "}
            <a href="https://medium.com/@harissucipto">Medium Publikasi</a>{" "}
            (Sekarang Disini)
          </li>
          <li>
            <a href="http://suciptoharis.blogspot.com/">
              http://suciptoharis.blogspot.com/
            </a>{" "}
            (Hiatus)
          </li>
          <li>
            <a href="http://7skystudio.blogspot.com/">
              http://7skystudio.blogspot.com/
            </a>{" "}
            (Hiatus)
          </li>
        </ul>
      </Layout>
    </div>
  )
}

export default Blog
