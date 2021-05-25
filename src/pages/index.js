import * as React from "react"
import Slider from "react-slick"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import TopBanner from "../components/hp/top-banner"
import KeystoneDiff from "../components/hp/keystone-diff"
import OurProgram from "../components/hp/our-program"

const IndexPage = () => (
  <Layout>
    <div>
      <TopBanner />
      <KeystoneDiff />
      <OurProgram />
    </div>
  </Layout>
)

export default IndexPage
