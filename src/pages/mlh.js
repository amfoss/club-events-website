import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Header from "../events/mlh-hack-day/components/header"
import Section from "../events/mlh-hack-day/components/section"

import '../events/mlh-hack-day/styles/style.sass'

const mlhPage = () => (
  <Layout>
    <SEO title="Local Hack Day | MLH | amFOSS" />
    <Header />
      <Section
            align="left"
            background="#FFEB3B"
            title="What is Local Hack Day?"
            content={
              <>
                <p>
                  MLH's Local Hack Day is a series of simultaneous global events
                  designed to spark a passion for technology in your local community.
                  Spend the day getting hands-on experience and collaborating in a
                  welcoming environment at a local event. Whether you are learning
                  to code or are an expert hacker, Local Hack Day is perfect for
                  you and your community. Learn new skills, build new projects,
                  and share your creations at a Local Hack Day near you.
                </p>
                <p>
                This year we are doing things differently. You can now host a
                conference, a hack day, and a demo day for your community. We
                are focusing on the three important skills - Learning, Building,
                and Sharing.
                </p>
              </>
            }
        />
  </Layout>
)

export default mlhPage
