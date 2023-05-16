import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import shape11 from "../images/shape-11.svg"
import shape3 from "../images/shape-03.svg"
import shape6 from "../images/shape-06.svg"

const SkillsPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ezzdin Atef | Skills</title>
      <link rel="canonical" href="https://ezzdinatef.me/skills" />
    </Helmet>
    <section className="section skills">
      <img className="shapes" src={shape3} alt="..." />
      <img className="shapes" src={shape11} alt="..." />
      <img className="shapes" src={shape6} alt="..." />
      <h2 className="heading">My Skills</h2>
      <div className="cat">
        <h3>Front End:</h3>
        <ul>
          <li>
            HTML5 <span>(pug.js)</span>
          </li>
          <li>
            CSS3 <span>(Sass)</span>
          </li>
          <li>JavaScript</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
        </ul>
      </div>
      <div className="cat">
        <h3>Back End:</h3>
        <ul>
          <li>Node.JS</li>
          <li>Express.JS</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>WordPress</li>
        </ul>
      </div>
      <div className="cat">
        <h3>design:</h3>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe XD</li>
        </ul>
      </div>
      <div className="cat">
        <h3>TOOLS:</h3>
        <ul>
          <li>Git/Github</li>
          <li>Gulp.js</li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default SkillsPage
