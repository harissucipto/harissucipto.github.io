import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <div>
      <SEO title="About" />
      <Layout>
        <div>
          <h1>About</h1>
          <h2>Siapa kamu ?</h2>
          <p>
            Nama saya Haris Sucipto biasa dipanggil Cipto atau Haris seorang
            Front End Developer yang terbiasa mengembangkan aplikasi Minimum
            Viable Product dan Prototype. Passion saya di dunia coding membuat
            saya terus ingin belajar memperbaiki diri untuk lebih baik lagi
            serta belajar menerapkan Test Drivent Development dan membuat
            catatan kecil pembelajaran yang bisa berguna bagi saya ataupun orang
            lain
          </p>

          <h2>Pernah belajar diamana saja ?</h2>
          <p>
            berikut list pembelajaran yang pernah saya ikuti sampai ketahap
            dapat sertifkat:{" "}
          </p>
          <ul>
            <li>
              <b>2015 – 2019</b> Universitas, Riau, Sarjana Komputer Program
              Studi Sistem Informasi (IPK 3.73, Dengan Pujian){" "}
            </li>
            <li>
              <b>2017</b> Udemy Course The Full Javascript & ES6 Tutorial
            </li>
            <li>
              <b>2016 – 2018</b> FreeCodeCamp Javascript Algorithms and Data
              Structures
            </li>
          </ul>

          <h2>Pencapaian kompetisi yang pernah kamu dapatkan?</h2>
          <p>
            Dibawah ini pencapaian kompetisi yang pernah saya raih di dunia IT:{" "}
          </p>
          <ul>
            <li>
              <b>2019</b> Juara 1 Desain Aplikasi Al-Quran Tingkat Musabaqah
              Tilawatil Quran Mahasiswa di Universitas Riau{" "}
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default About
