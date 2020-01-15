import React from "react"

const FooterBar = () => {
  return (
    <footer style={{ border: "2px solid black" }}>
      <div>
        <div></div>
        <div>
          <h2>Hello</h2>
          <p>
            Sunt pariatur magna ex elit elit incididunt mollit proident ut ad
            exercitation laborum sint.
          </p>
        </div>
      </div>

      <div>
        <h2>Connect with me</h2>
        <div>
          <p>Email</p>
          <p>Github</p>
          <p>Twitter</p>
        </div>
      </div>
      <div>
        <p>
          © {new Date().getFullYear()}, Craft By
          {` `}
          <a href="https://harissucipto.com">Haris Sucipto</a>
        </p>
      </div>
    </footer>
  )
}

export default FooterBar
