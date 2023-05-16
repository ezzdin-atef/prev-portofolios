import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import shape11 from "../images/shape-11.svg"
import shape3 from "../images/shape-03.svg"
import personalPhoto from "../images/personal.jpeg"

const AboutPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ezzdin Atef | About</title>
      <link rel="canonical" href="https://ezzdinatef.me/about" />
    </Helmet>
    <section className="section about animate__bounceInUp">
      <img className="shapes" src={shape3} alt="..." />
      <img className="shapes" src={shape11} alt="..." />
      <h2 className="heading">About Me</h2>
      <div className="photo">
        <img src={personalPhoto} alt="Ezzdin Atef Photo" />
      </div>
      <div className="text">
        My Name is Ezzdin Atef. I'm a Student of Software Engineering at Helwan
        University in my third year. I love web design & development, love to
        learn new stuff, and self-learner. I participated in HelwanCPC Contest
        in 2019 and became an ICPC Mentor in ICPC Helwan Community in 2020. I
        have volunteered in 180 Daraga in 2018 and became a Media Member, and I
        was the Media Coordinator in New Stage Event in 2019 and won the Best
        Member Prize.
      </div>
    </section>
  </Layout>
)

export default AboutPage
