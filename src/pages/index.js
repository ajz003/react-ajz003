import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-background">
      <div className="hero-text-wrapper">
        <h1 className="hero-text">Anthony Zheng</h1>
        <p>Always exploring new horizons</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage;