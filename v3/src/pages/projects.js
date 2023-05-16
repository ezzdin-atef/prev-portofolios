import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import shape11 from "../images/shape-11.svg"
import shape3 from "../images/shape-03.svg"
import shape6 from "../images/shape-06.svg"

const getLang = el => {
  const langs = []
  el.langs.forEach(lang => {
    if (lang.includes("html")) {
      langs.push(<span className="html">HTML5</span>)
    } else if (lang.includes("css")) {
      langs.push(<span className="css">CSS3</span>)
    } else if (lang.includes("js")) {
      langs.push(<span className="js">JavaScript</span>)
    } else if (lang.includes("jquery")) {
      langs.push(<span className="jquery">jQuery</span>)
    } else if (lang.includes("php")) {
      langs.push(<span className="php">PHP</span>)
    } else if (lang.includes("mysql")) {
      langs.push(<span className="mysql">MySQL</span>)
    } else if (lang.includes("sass")) {
      langs.push(<span className="sass">Sass</span>)
    } else if (lang.includes("pug")) {
      langs.push(<span className="pug">Pug.js</span>)
    } else if (lang.includes("wp")) {
      langs.push(<span className="wp">WordPress</span>)
    } else if (lang.includes("bootstrap")) {
      langs.push(<span className="bootstrap">Bootstrap</span>)
    } else if (lang.includes("react")) {
      langs.push(<span className="react">React.js</span>)
    } else if (lang.includes("node")) {
      langs.push(<span className="node">Node.js</span>)
    } else if (lang.includes("express")) {
      langs.push(<span className="express">Express.js</span>)
    } else if (lang.includes("graphql")) {
      langs.push(<span className="graphql">GraphQL</span>)
    } else if (lang.includes("firebase")) {
      langs.push(<span className="firebase">Firebase</span>)
    } else if (lang.includes("mongodb")) {
      langs.push(<span className="mongodb">MongoDB</span>)
    }
  })
  return langs
}

const ProjectsPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ezzdin Atef | Projects</title>
      <link rel="canonical" href="https://ezzdinatef.me/projects" />
    </Helmet>
    <section className="section projects">
      <img className="shapes" src={shape3} alt="..." />
      <img className="shapes" src={shape11} alt="..." />
      <img className="shapes" src={shape6} alt="..." />
      <h2 className="heading">My Projects</h2>
      {projects.map(el => (
        <div className="card" key={el.title}>
          <h4>
            <a href={el.live} target="_blank" rel="noreferrer">
              {el.title} <span>--{">"}</span>
            </a>
          </h4>
          <p>{el.description}</p>
          <footer>
            <div className="langs">{getLang(el)}</div>

            <a href={el.github} target="_blank" rel="noreferrer">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </footer>
        </div>
      ))}
    </section>
  </Layout>
)

const projects = [
  {
    title: "eCommerce Dashboard",
    live: "https://ecommerce-dashboard.pages.dev/",
    description:
      "Dashboard for any kind of website but it's more spacific for eCommerce websites ^_^",
    github: "https://github.com/ezzdin-atef/eCommerce-Dashboard",
    langs: ["js", "react", "redux"],
  },
  {
    title: "eCommerce App",
    live: "https://ecommerce-react-123.netlify.app",
    description: "It's an eCommerce React App for selling Products Online",
    github: "https://github.com/ezzdin-atef/eCommerce-React",
    langs: ["js", "react", "node", "express", "graphql", "firebase", "mongodb"],
  },
  {
    title: "Bike Store",
    live: "no-preview.html",
    description:
      "Bike Store is a College project for selling and renting bikes and its accessories and for posting blogs about bikes.",
    github: "https://github.com/ezzdin-atef/BikeStore",
    langs: ["html", "css", "js", "jquery", "php", "mysql"],
  },
  {
    title: "Movies App",
    live: "https://movie-app-12354.netlify.app",
    description:
      "It's an app to search and find some cool Movies and Series and I used TMDB API",
    github: "https://github.com/ezzdin-atef/movies-app",
    langs: ["react", "js"],
  },
]

export default ProjectsPage
