import React from "react"
import styled from "styled-components"
import Button from "../ui/Button"
import Paragraph from "../ui/Paragraph"

const StyledBlogCard = styled.div`
	width: 100%;
	height: 325px;
	background-color: white;
	margin-bottom: 40px;
	padding-bottom: 40px;
	.postImageWrapper {
		width: 100%;
		height: auto;
		img {
			width: 100%;
			height: auto;
		}
	}
	h3 {
		font-family: "Varela Round", sans-serif;
		font-size: 18px;
		padding: 40px 25px 0 25px;
		margin: 0;
		margin-top: -4px;
		color: black;
	}
	.mainContent {
		color: black;
		padding: 0 25px;
		.postBody {
			font-size: 13px;
			font-family: "Barlow", sans-serif;
		}
		.postDate {
			font-size: 12px;
			font-family: "Barlow", sans-serif;
			padding-bottom: 10px;
		}
	}
`
const clickHandler = () => {
	console.log("clicked")
}

const styleArray = ["large", "solid"]

const BlogCard = props => {
	return (
		<StyledBlogCard>
			<div className="postImageWrapper">
				<img src={props.postImage} alt="Prodigy post" />
			</div>
			<h3>
				Blog post title will appear here, dynamically pulled in with other
				content
			</h3>
			<div className="mainContent">
				<p className="postBody">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil
					nulla dolorum doloremque odit nostrum!
				</p>
				{/* <Paragraph /> */}
				<p className="postDate">November 1, 2019</p>
				<Button onClick={clickHandler} customStyle={styleArray}>
					Read More
				</Button>
			</div>
		</StyledBlogCard>
	)
}

export default BlogCard
