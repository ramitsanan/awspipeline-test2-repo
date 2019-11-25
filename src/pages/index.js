import React from "react"
import { Link, withAssetPrefix } from "gatsby"

import Layout from "../components/Layout/"
import SEO from "../components/SEO/seo.js"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Welcome to Prodigy</h1>

		<Link to="/blog/">Go to Blog</Link>
	</Layout>
)

export default IndexPage
