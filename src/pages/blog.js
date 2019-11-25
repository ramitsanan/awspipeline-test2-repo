import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/"
import SEO from "../components/SEO/seo.js"
import BlogCard from "../components/BlogCard/"
import blogFeatureImage from "../images/BlogFeature.jpg"
import blogPostImage1 from "../images/blogPostImage1.png"
import blogPostImage2 from "../images/blogPostImage2.png"
import blogPostImage3 from "../images/blogPostImage3.png"

const StyledBlogPage = styled.div`
	padding-top: 20px;
	padding-bottom: 20px;
	h1 {
		color: #ffffff;
		font-family: "Varela Round", sans-serif;
		font-size: 24px;
		padding-top: 20px;
		padding-bottom: 20px;
		margin: 0;
	}
	.cardSection {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: stretch;
		grid-column-gap: 25px;
	}
`

const FeaturedBlogPost = styled.div`
	height: 260px;
	margin-bottom: 25px;
	background-image: url(${blogFeatureImage});
	background-size: cover;
	.contentWrapper {
		width: 50%;
		h2 {
			margin: 0;
			padding: 25px 0 0 25px;
			font-family: "Varela Round", sans-serif;
			font-size: 28px;
		}
		.postContent {
			margin: 0;
			padding: 20px 0 0 25px;
			font-size: 15px;
			line-height: 22px;
			font-family: "Barlow", sans-serif;
		}
		.postDate {
			margin: 0;
			padding: 20px 0 0 25px;
			font-size: 11px;
			font-family: "Barlow", sans-serif;
		}

		button {
			margin: 20px 0 0 25px;
			padding: 10px 25px;
			font-family: "Varela Round", sans-serif;
			font-size: 12px;
		}
	}
`

const StyledNav = styled.nav`
	background-color: #eaeaea;
	height: 50px;
	color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 25px;
	padding-right: 25px;
	font-family: "Varela Round", sans-serif;
	margin-bottom: 50px;
	span {
		font-weight: bold;
		margin-right: 40px;
		font-size: 16px;
	}
	ul {
		font-size: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-basis: 100%;
		padding-left: 0;
		li {
			list-style-type: none;
			margin-left: 20px;
		}
	}
`

const BlogPage = () => (
	<Layout>
		<StyledBlogPage>
			<SEO title="Blog" />

			<h1>Prodigy Blog</h1>

			<FeaturedBlogPost>
				<div className="contentWrapper">
					<h2>Blog Post Title</h2>
					<p className="postContent">
						First however many characters of post content. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Perferendis explicabo esse
						ducimus facere magnam, fuga.
					</p>
					<p className="postDate">November 1, 2019</p>
					<button>Read More</button>
				</div>
			</FeaturedBlogPost>

			<StyledNav>
				<span>Categories</span>
				<ul>
					<li>Schools</li>
					<li>Parents</li>
					<li>Teachers</li>
					<li>Tutoring</li>
					<li>Research</li>
				</ul>
			</StyledNav>

			<div className="cardSection">
				<BlogCard postImage={blogPostImage1} />
				<BlogCard postImage={blogPostImage2} />
				<BlogCard postImage={blogPostImage3} />
				<BlogCard postImage={blogPostImage1} />
				<BlogCard postImage={blogPostImage2} />
				<BlogCard postImage={blogPostImage3} />
			</div>

			{/* <Link to="/">Home page</Link> */}
		</StyledBlogPage>
	</Layout>
)

export default BlogPage
