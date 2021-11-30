import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoBoxes from "../components/InfoBoxes"

import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {
  WEBSITE_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL,
} from '../utils/constants'

import "./about.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="about-page">


      <section className="top-matter section">
        <div className="container">
          <div className="columns has-text-centered">
            <div className="column is-6 is-offset-3">
              <h1>About Me</h1>
              <div>Web Developer</div>
              <div>Petaluma, California</div>
              <a href={WEBSITE_URL}>anthonyz.dev</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h2 style={{ textAlign: "center" }}>Summary</h2>
              <p>I have a degree in Chemistry/Materials Science from UCLA with a deep love of learning and helping others with my knowledge.
              </p>
              <p>I like to create tools and applications to help people with whatever they need help with. I’m a jack-of-all-trades and I jump at opportunities to learn new things. I believe that having knowledge in a diverse number of fields leads to well-rounded products that anyone can use.
              </p>
              <p>
                I have experience with front end web development tech like HTML/CSS, jQuery, and <strong>React</strong>, as well as back end technlogies and tools like <strong>Node/Express</strong>, MySQL, Heroku, and Netlify. I’m detail-oriented and I strive to collaborate with others to make clean and intuitive applications.
              </p>
            </div>
          </div>
          <div className="columns has-text-centered">
            <div className="column is-6 is-offset-3">
              <h4>Contact</h4>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <div className="columns is-mobile about-social-icons">

                <a className="navbar-item column is-narrow" aria-label="Email" href={`mailto:${EMAIL}`}><MdEmail className="social-icon" /></a>
                <a target="_blank" rel="noopener noreferrer" aria-label="My GitHub Profile" className="navbar-item column is-narrow" href={GITHUB_URL} title="My GitHub profile"><GoMarkGithub className="social-icon" /></a>
                <a target="_blank" rel="noopener noreferrer" aria-label="My LinkedIn Profile" className="navbar-item column is-narrow" href={LINKEDIN_URL} title="My LinkedIn profile"><FaLinkedin className="social-icon" /></a>

              </div>
            </div>
          </div>

          <div className="columns has-text-centered">
            <div className="column is-6 is-offset-3">
              <h3>My Resume</h3>
              <p><a href="/pdfs/resume.pdf">View</a></p>
              <p><a href="/pdfs/resume.pdf" download>Download</a></p>
            </div>
          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns has-text-centered">
            <div className="column is-6 is-offset-3">
              <h3>Hiring Info</h3>
              <p>Interested In:</p>
              <InfoBoxes
                boxNames={[
                  "Full-Time",
                  "Freelance",
                  "Contract"
                ]}
              />
            </div>
          </div>

          <div className="columns has-text-centered">
            <div className="column is-6 is-offset-3">
              <h3>Languages and Tools</h3>
              <InfoBoxes
                boxNames={[
                  "JavaScript",
                  "TypeScript",
                  "Python",
                  "PHP",
                  "HTML/CSS",
                  "Git/GitHub",
                  "Bootstrap",
                  "Node",
                  "SQL",
                  "React",
                  "Redux",
                  "Docker",
                  "webpack",
                ]}
              />
            </div>
          </div>

        </div>
      </section>

    </div>

  </Layout>
)

export default AboutPage
