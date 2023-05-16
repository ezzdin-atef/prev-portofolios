import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error-page">
      <h1>404</h1>
      <p>Sorry, The Page is NOT FOUND</p>
      <a href="index.html" className="btn">
        Go Back to hompepage
      </a>
    </div>
  </Layout>
)

export default NotFoundPage
