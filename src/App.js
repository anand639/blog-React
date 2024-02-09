import React from "react";
import BlogPostList from "./components/BlogPostList";
import SamplePosts from "./components/SamplePosts";

function App() {
	return (
		<div>
			<header>
				<h1>My Cool Blog</h1>
			</header>
			<main>
				<BlogPostList posts={SamplePosts} />
			</main>
		</div>
	);
}

export default App;
