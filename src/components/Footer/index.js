import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import mainLogo from "../../images/mainLogoLight.svg"
import InstaIcon from "../../images/Icons/SocialIcons-Flat/Instagram-Dark.svg"

const StyledFooter = styled.footer`
  height: 27px;
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  .mainLogoWrapper {
    width: 85px;
    height: auto;
    .mainLogo {
      width: 100%;
      height: auto;
    }
  }
  .linksWrapper {
    display: flexbox;
    align-items: center;

    .termsLinks {
      text-align: center;
      .textLink {
        margin: auto 20px;
        text-decoration: none;
        font-family: "Varela Round", sans-serif;
        color: #95a1ad;
        font-size: 17px;
        line-height: 28px;
      }
    }

    .socialIcons {
      display: flexbox;
      align-items: center;
      .socialLinkWrapper {
        width: 24px;
        height: auto;
        margin-left: 15px;
        .socialLink {
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
`

const Footer = props => (
  <StyledFooter>
    <div className="mainLogoWrapper">
      <img src={mainLogo} alt="Prodigy Logo" className="mainLogo" />
    </div>

    <div className="linksWrapper">
      <span className="termsLinks">
        <a href="#" className="textLink">
          Privacy Policy
        </a>
        <a href="#" className="textLink">
          Terms and Conditions
        </a>
      </span>

      <span className="socialIcons">
        <div className="socialLinkWrapper">
          <a href="https://www.instagram.com/" className="socialLink">
            <img src={InstaIcon} alt="Social Icon" />
          </a>
        </div>
        <div className="socialLinkWrapper">
          <a href="https://www.instagram.com/" className="socialLink">
            <img src={InstaIcon} alt="Social Icon" />
          </a>
        </div>
        <div className="socialLinkWrapper">
          <a href="https://www.instagram.com/" className="socialLink">
            <img src={InstaIcon} alt="Social Icon" />
          </a>
        </div>
        <div className="socialLinkWrapper">
          <a href="https://www.instagram.com/" className="socialLink">
            <img src={InstaIcon} alt="Social Icon" />
          </a>
        </div>
      </span>
    </div>
  </StyledFooter>
)

export default Footer
