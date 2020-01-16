import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from "../files/resume.pdf"

const projekKlien = [
  {
    id: "01",
    nama: "Sistem Informasi Kelulusan Mahasiswa",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
  },
  {
    id: "02",
    nama: "Sistem Informasi Kelulusan Mahasiswa",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
  },
]

const Work = () => {
  return (
    <div>
      <SEO title="Work" />
      <Layout>
        <h1>Work</h1>
        <p>
          Saya biasanya bekerja sebagai full stack developer dengan menggunakan
          javascript untuk menyelesaikan pekerjaan sampingan, jika tertarik saya
          juga menyediakan{" "}
          <a href={resume} download>
            resume saya
          </a>{" "}
          .
        </p>
        <h2>Skil set teknis kamu?</h2>
        <p>
          Alat yang saya saya gunakan biasaya seperti list dibawah, tapi saya
          dengan senang hati mempelajari alat - alat baru jika diberikan
          kesempatan untuk kontribusi di projek lainnya.
        </p>
        <ul>
          <li>
            <b>Teknologi: </b> HTML, CSS, JS, NodeJS
          </li>
          <li>
            <b>Database: </b> Prisma GraphQL, MongoDB, PostgreSQL, Firebase.
          </li>
          <li>
            <b>Javascript Framework: </b> React, React Native, Next, Express
          </li>
          <li>
            <b>Version Control: </b> Git.
          </li>
        </ul>

        <h2>Projek Klient yang pernah kamu kerjakan?</h2>
        <p>
          list dibawah ini merupakan projek yang pernah saya kerjakan{" "}
          <i> Detail Projeknya silahkan klik pada nama projek tersebut.</i>
        </p>

        <ul>
          {projekKlien.map(item => (
            <li key={item.id}>{item.nama}</li>
          ))}
        </ul>
      </Layout>
    </div>
  )
}

export default Work
