import * as React from "react"
import Slider from "react-slick"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import TopBanner from "../components/hp/top-banner"
import KeystoneDiff from "../components/hp/keystone-diff"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const IndexPage = () => (
  <Layout>
    <div>
      <TopBanner />
      <KeystoneDiff />
    </div>
  </Layout>
)

export default IndexPage
