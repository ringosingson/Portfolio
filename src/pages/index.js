import React from "react"
import { Link } from "gatsby"
import SocialMedia from "../components/SocialMedia"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage() {
  const [greeting] = useState(
    greetingOptions[Math.floor(Math.random() * greetingOptions.length)]
  )
    <h1>Hi people</h1>
    <SocialMedia />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
