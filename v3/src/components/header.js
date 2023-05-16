import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useState, useEffect } from "react"
import "font-awesome/css/font-awesome.css"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const navigation = useRef(null)
  const toggleMenu = e => {
    setOpen(!open)
  }

  useEffect(() => {
    if (open) {
      navigation.current.classList.add("d-flex")
      navigation.current.classList.remove("d-none")
    } else {
      navigation.current.classList.remove("d-flex")
      navigation.current.classList.add("d-none")
    }
  }, [open])

  return (
    <>
      <span className={open ? "open d-none" : "open"} onClick={toggleMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </span>
      <span className={open ? "close" : "close d-none"} onClick={toggleMenu}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </span>
      <nav className={"navigation-bar"} ref={navigation}>
        <h1>E</h1>
        <ul className="sections">
          <li data-link="homepage" className="active">
            <Link to="/" activeClassName="active">
              <i className="fa fa-home" aria-hidden="true"></i>{" "}
              <span>Home</span>
            </Link>
          </li>
          <li data-link="about">
            <Link to="/about" activeClassName="active">
              <i className="fa fa-user" aria-hidden="true"></i>{" "}
              <span>About</span>
            </Link>
          </li>
          <li data-link="skills">
            <Link to="/skills" activeClassName="active">
              <i className="fa fa-list" aria-hidden="true"></i>{" "}
              <span>Skills</span>
            </Link>
          </li>
          <li data-link="projects">
            <Link to="/projects" activeClassName="active">
              <i className="fa fa-briefcase" aria-hidden="true"></i>{" "}
              <span>Projects</span>
            </Link>
          </li>
          <li data-link="contact">
            <Link to="/contact" activeClassName="active">
              <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <ul className="social">
          {/* <li>
        <a href="https://www.facebook.com/ezzdin2001" target="_blank" rel="noreferrer"
          ><i className="fa fa-facebook" aria-hidden="true"></i>
          <span>Facebook</span>
        </a>
      </li> */}
          <li>
            <a
              href="https://twitter.com/ezzdin_atef"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <span>Twitter</span>
            </a>
          </li>
          {/* <li>
        <a
          href="https://www.youtube.com/channel/UCcV8kzgd-DhVXCUYDb8fGYw"
          target="_blank" rel="noreferrer"
          ><i className="fa fa-youtube-play" aria-hidden="true"></i>
          <span>Youtube</span></a
        >
      </li> */}
          <li>
            <a
              href="https://www.linkedin.com/in/ezzdin-atef"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <span>Linked In</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ezzdin-atef"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/ezzdin_atef"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-codepen" aria-hidden="true"></i>
              <span>Codepen</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
