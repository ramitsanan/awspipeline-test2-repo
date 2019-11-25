import React from "react"
import { withKnobs, text, radios } from "@storybook/addon-knobs"
import Paragraph from "./index.js"

export default {
	title: "UI/Paragraph",
	decorators: [withKnobs],
}

export const ParagraphStyles = () => {
	const styles = {
		Large: "large",
		Small: "small",
		Legal: "legal",
	}

	const styleValue = radios("Paragraph Style:", styles, styles.Small)

	return (
		<Paragraph customStyle={styleValue}>{text("Paragraph Text:")}</Paragraph>
	)
}
