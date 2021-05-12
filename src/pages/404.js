import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404</h1>
    <p>
      The page you are looking for is either under construction or non-exist.
    </p>
    <p>Working on it though.</p>
    <p>Cheers.</p>
  </Layout>
)

export default NotFoundPage
