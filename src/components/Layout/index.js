import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "../Header/"
import Footer from "../Footer/"
import backgroundLogo from "../../images/backgroundLogo.svg"
import "../../styles/global.css"

const StyledLayout = styled.div`
	padding: 30px 25px;
	background: radial-gradient(
		circle farthest-corner at 100% 90%,
		#371844 0%,
		#2e3e4c 100%
	);
	color: white;
	main {
		height: 100vh;
		width: 900px;
		margin: auto;
	}
	.backgroundLogoWrapper {
		width: 70%;
		max-width: 700px;
		height: auto;
		.backgroundLogo {
			height: auto;
			width: 100%;
			opacity: 0.32;
		}
	}
`

const Layout = ({ children }) => {
	return (
		<StyledLayout>
			<Header siteTitle="Title" />

			<main>{children}</main>
			<div className="backgroundLogoWrapper">
				<img
					src={backgroundLogo}
					alt="Prodigy Logo"
					className="backgroundLogo"
				/>
			</div>
			<Footer />
		</StyledLayout>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
