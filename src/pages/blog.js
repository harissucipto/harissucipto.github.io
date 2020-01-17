import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <div>
      <SEO title="Blog" />
      <Layout>
        <h2>Blog</h2>
        <p>
          Blog saya posting di{" "}
          <a href="https://medium.com/@harissucipto">Medium</a>
        </p>
      </Layout>
    </div>
  )
}

export default Blog
