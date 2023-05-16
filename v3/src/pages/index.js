import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import shape11 from "../images/shape-11.svg"
import shape3 from "../images/shape-03.svg"
import personalPhoto from "../images/personal.jpeg"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ezzdin Atef | Home</title>
      <link rel="canonical" href="https://ezzdinatef.me" />
    </Helmet>
    <section className="section homepage">
      <img className="shapes" src={shape3} alt="..." />
      <img className="shapes" src={shape11} alt="..." />
      <div className="text">
        <h3>
          Hi
          <span role="img" aria-label="Hi">
            👋
          </span>
        </h3>
        <p>
          I'm <span>Ezzdin Atef</span>
        </p>
        <p>A Web Developer</p>
        <Link to="/projects" className="btn contact-btn">
          My Projects
        </Link>
        <Link to="/contact" className="btn-light project-btn">
          Contact Me
        </Link>
      </div>
      <div className="photo">
        <img src={personalPhoto} alt="Ezzdin Atef Photo" />
      </div>
    </section>
  </Layout>
)

export default IndexPage
