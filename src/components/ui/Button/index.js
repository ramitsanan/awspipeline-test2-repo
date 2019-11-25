import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// Style options
export const StyledButton = styled.button`
	font-family: "Red Hat Display", sans-serif;
	&.solid {
		background-color: #b019ec;
		color: #ffffff;
	}
	&.outline {
		padding: 10px 25px;
		background-color: transparent;
		color: #b019ec;
		font-size: 12px;
	}
	&.medium {
		padding: 10px 25px;
		font-size: 12px;
	}
	&.large {
		padding: 15px 30px;
		font-size: 14px;
	}
`
// {children} renders within the button as text
// {customAction} is the onClick method
// {customStyle} is an array of classes
const Button = ({ children, onClick, customStyle }) => {
	return (
		<StyledButton onClick={onClick} className={customStyle}>
			{children}
		</StyledButton>
	)
}

// Prop types
Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
	customStyle: PropTypes.array,
}

// Default props
Button.defaultProps = {
	onClick: null,
	customStyle: ["solid", "medium"],
	children: "Button",
}

export default Button
