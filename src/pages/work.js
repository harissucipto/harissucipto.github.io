import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from "../files/resume.pdf"

const projekKlien = [
  {
    id: "01",
    nama:
      "Sistem Informasi Tingkat Kelulusan Mahasiswa (Web)-2019-solo-fullstack",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
    link:
      "https://drive.google.com/file/d/1kW1KMIR--LUkuovhV-fJERll5HTz-8Uh/preview",
  },
  {
    id: "02",
    nama:
      "Aplikasi Klasifikasi Jenis Penyakit Tanaman Padi (Web)-2019-solo-fullstack",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
    link:
      "https://drive.google.com/file/d/1-TWgO-EaMTRItNfQbOMT94dqjMDaav0K/preview",
  },
  {
    id: "03",
    nama: "Aplikasi ItemSet Barang Penjualan (Web)-2019-solo-fullstack",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
    link:
      "https://drive.google.com/file/d/1s3i3a1jNCDPeGxN2HE3LrHDg46_fRkRZ/preview",
  },
  {
    id: "04",
    nama: "Sistem Klasifikasi Kelulusan (Web)-2019-solo-fullstack",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
    link:
      "https://drive.google.com/file/d/1LFldNRkXt7QW_91EP0qF5TARGhXUYRgz/preview",
  },
  {
    id: "06",
    nama: "Sistem Peramalan Stok Barang Keluar (Web)-2019-solo-fullstack",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
    link:
      "https://drive.google.com/file/d/1jH2849oklti6Os5VbRzeOYl5GUSIz_j7/preview",
  },
  {
    id: "07",
    nama: "Sistem Peramalan Kelapa Sawit (Web)-2019-solo-fullstack",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
    link:
      "https://drive.google.com/file/d/1MB3vN9b4b-WW5QI7vvBvAqq1-F-1I194/preview",
  },
  {
    id: "08",
    nama: "AFIKA (Aplikasi Pengahapal Al-Quran) (Android)-2019-solo-fullstack",
    deskripsi: "",
    link:
      "https://play.google.com/store/apps/details?id=com.harissucipto.afika",
  },
  {
    id: "09",
    nama:
      "Geovisor tracking karywan dan supervisor lapangan (Android)-2018-fullstack",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
    link: "",
  },
  {
    id: "10",
    nama: "Apliasi Adab Berkapain Menurut Syariat Islam (Android)-2018-TIM",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
    link: "#",
  },
  {
    id: "11",
    nama:
      "Bengkel Motor Honda Hotspot Online Driver (Android)-2018-TIM-Prototype",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
    link: "https://play.google.com/store/apps/details?id=com.cipto.bemohot",
  },
  {
    id: "11",
    nama:
      "Bengkel Motor Honda Hotspot Online Meknaik (Android)-2018-TIM-Prototype",
    deskripsi: "Projek Kali ini main dengan Algoritma FP Growth",
    link:
      "https://play.google.com/store/apps/details?id=com.cipto.bemohotmekanik",
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
        <p>list dibawah ini merupakan projek yang pernah saya kerjakan </p>

        <ul>
          {projekKlien.map(item => (
            <li key={item.id}>
              <a href={item.link}>{item.nama}</a>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  )
}

export default Work
