import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import shape11 from "../images/shape-11.svg"
import shape3 from "../images/shape-03.svg"
import shape6 from "../images/shape-06.svg"

const ContactPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ezzdin Atef | Contact</title>
      <link rel="canonical" href="https://ezzdinatef.me/contact" />
    </Helmet>
    <section className="section contact">
      <img className="shapes" src={shape3} alt="..." />
      <img className="shapes" src={shape11} alt="..." />
      <img className="shapes" src={shape6} alt="..." />
      <h2 className="heading">Contact Me</h2>
      <form method="POST" name="contact" data-netlify="true">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required="required"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required="required"
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="The Subject"
          required="required"
        />
        <textarea
          placeholder="Your Message"
          rows="15"
          name="message"
          required="required"
        ></textarea>
        <input
          type="submit"
          className="btn btn-contact"
          value="Send"
          name="send"
          id="send"
        />
      </form>
    </section>
  </Layout>
)

export default ContactPage
