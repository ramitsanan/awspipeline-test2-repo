import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import mainLogo from "../../images/mainLogoLight.svg"
import languagesIcon from "../../images/Languages.svg"
import loginIcon from "../../images/LoginIcon.svg"

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: "Varela Round", sans-serif;
	.linksWrapper {
		display: flex;
		align-items: center;
		.linkWrapper {
			margin-left: 30px;
			a {
				color: #ffffff;
				font-size: 13px;
				line-height: 16px;
				letter-spacing: 0.54px;
				text-decoration: none;
				display: flex;
				align-items: center;
				p {
					margin: auto 0 auto 8px;
					height: 100%;
					display: inline-block;
				}
				.iconWrapper {
					/* width: 20px;
          height: auto; */
					display: inline;
				}
			}
		}
		button {
			margin-left: 30px;
			height: 50px;
			width: 138px;
			background-color: #b019ec;
			color: #ffffff;
			font-size: 13px;
			border: none;
		}
	}
`

const Header = props => (
	<StyledHeader>
		<div className="mainLogoWrapper">
			<img src={mainLogo} alt="Prodigy Logo" className="mainLogo" />
		</div>

		<div className="linksWrapper">
			<div className="linkWrapper">
				<a href="#">
					<div className="iconWrapper">
						<img src={languagesIcon} alt="Language Icon" className="linkImg" />
					</div>
				</a>
			</div>
			<div className="linkWrapper">
				<a href="#">
					<div className="iconWrapper">
						<img src={loginIcon} alt="Login Icon" className="linkImg" />
					</div>
					<p>Log in</p>
				</a>
			</div>
			<button>Play Prodigy</button>
		</div>
	</StyledHeader>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: `Prodigy Education`,
}

export default Header
