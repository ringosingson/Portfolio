import React, { useState } from "react"
//import { Link } from "gatsby"
import posed from "react-pose"
import SocialMedia from "../components/SocialMedia"
import styled from "styled-components"
import { greetingOptions } from "../data/configOptions"
import Layout from "../components/layout"
//import Image from "../components/image"
import ScrambleText from "../components/ScrambleText"
import SEO from "../components/seo"

// React-pose configuration that provides a fade on enter transition
const fadeEnterConfig = {
  enter: {
    opacity: 0,
  },
  normal: {
    opacity: 1,
    transition: { duration: 2500 },
  },
}

const MainInfoText = styled(posed.div(fadeEnterConfig))`
  letter-spacing: 0;
  font-family: "Expletus Sans", sans-serif;
  font-weight: bold;
  font-size: 12vh;
  text-shadow: 0 0 0;
  padding-bottom: 32px;
`

const Greeting = styled(posed.div(fadeEnterConfig))`
  font-size: 5vh;
  margin-top: 16%;
  padding-bottom: 40px;
`

function IndexPage() {
  const [greeting] = useState(
    greetingOptions[Math.floor(Math.random() * greetingOptions.length)]
  )
  // Load a new random greeting on every page load
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <div>
          <Greeting>{`${greeting} I'm`}</Greeting>
        </div>
        <div>
          <MainInfoText initialPose="enter" pose="normal">
            <ScrambleText
              text="Ringo Singson."
              scramble="!<>-_\\/[]{}—=+*^?#_abiwxevpi"
              options={{ duration: 250, speed: 15 }}
            />
          </MainInfoText>
        </div>
        <h2 className="sm-heading">
          Front-end Developer, Love playing guitar & passionate about new
          technologies, new ideas and new ways of thinking
        </h2>
        <SocialMedia />
      </div>
    </Layout>
  )
}

export default IndexPage
