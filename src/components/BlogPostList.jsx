import React from "react";
import BlogPost from "./BlogPost";
const BlogPostList = ({ posts }) => (
	<div className="blogPostList">
		{posts.map((post) => (
			<BlogPost key={post.id} {...post} />
		))}
	</div>
);

export default BlogPostList;
