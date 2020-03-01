import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./portfolio.scss"

function PortfolioItem(props) {
  return(
    <div className="column portfolio-item">
      <a target="_blank" rel="noopener noreferrer" class="image-link" href={props.appHref}><img alt={props.description} src={props.imgSrc} /></a>
<div className="text-wrapper">
    {props.description}
    </div>
  <div className="buttons has-text-centered">
      {props.buttons.map((button) => <a target="_blank" rel="noopener noreferrer" class="button" href={button.href}>{button.text}</a> )}
  </div>
    </div>
  )
}

function PortfolioRow(props) {
  return(
<div className="column">
      <div className="columns portfolio-items">
      <PortfolioItem
        imgSrc="/images/olymkets.png"
        appHref="https://ajz003.github.io/Summon-Simulator/"
        githubHref=""
        description={<p><strong>Olymkets Ticket Tracker</strong> is a service that tracks the 2020 Tokyo Olympics ticket availability from the US ticket seller <a className="in-link" href="https://www.cosport.com/default.aspx" rel="noopener noreferrer" target="_blank">CoSport</a>. It will send you a text message with info about the availability about Olympic events and at a repeated time interval of your choosing.</p>}
        buttons={[
          {
          text: "GitHub",
          href: "https://github.com/ajz003/olympics-ticket-tracker"
          }
      ]}
      />
      <PortfolioItem
        imgSrc="/images/redorb.png"
        appHref="https://ajz003.github.io/Summon-Simulator/"
        githubHref=""
        description={<p><strong>Summon Simulator</strong> is a tool for players of Nintendo's hit mobile game Fire Emblem Heroes. It conducts a number of trials to tell the user their chance of randomly summoning their chosen heroes as well as other statistics.</p>}
        buttons={[
          {
            text: "App",
            href: "https://ajz003.github.io/Summon-Simulator/"
            },
          {
            text: "GitHub",
            href: "https://github.com/ajz003/Summon-Simulator"
            }
      ]}
      />
      <PortfolioItem
        imgSrc="/images/dadbase.png"
        appHref="https://dad-a-base.herokuapp.com/"
        githubHref=""
        description={<p><strong>dad-a-base</strong> is a website that scrapes dad-related news and articles from the top dad websites. It helps users find parenting tips, activities to do with their kids, and allows them to connect with others with a built-in forum. Users can log in (via e-mail or Facebook), create discussions, and respond to others' posts. Built with React and Node.</p>}
        buttons={[
          {
            text: "App",
            href: "https://dad-a-base.herokuapp.com/"
            },
          {
            text: "GitHub",
            href: "https://github.com/ajz003/dad-a-base"
            }
      ]}
      />
      </div>
</div>
  )
}

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
<div className="portfolio-page">
      <section className="section">
  <div className="container">
  <div className="columns has-text-centered">
  <div className="column is-6 is-offset-3">
      <h1>Portfolio</h1>
  </div>
  </div>
  <div className="columns">
  <PortfolioRow />
  </div>
  </div>
     </section>
</div>
  </Layout>
)

export default PortfolioPage
