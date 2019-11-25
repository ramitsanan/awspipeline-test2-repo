import React from "react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, radios } from "@storybook/addon-knobs"
import Button from "./index.js"

export default {
	title: "UI/Button",
	decorators: [withKnobs],
}

export const ButtonStyles = () => {
	const sizes = {
		Medium: "medium",
		Large: "large",
	}
	const styles = {
		Solid: "solid",
		Outline: "outline",
	}
	const sizeValue = radios("Button Size:", sizes, sizes.Medium)
	const styleValue = radios("Button Style:", styles, styles.Solid)
	const customStyle = [sizeValue, styleValue]

	return (
		<Button
			customStyle={customStyle}
			onClick={action("Button has been clicked!")}
		>
			{text("Button Text:", "Read More")}
		</Button>
	)
}
