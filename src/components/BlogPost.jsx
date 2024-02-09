import React from "react";
import CommentSection from "./CommentSection";
const BlogPost = ({ id, title, content, author }) => (
	<article className="blogPost">
		<h2>{title}</h2>
		<p>{content}</p>
		<p className="author">Written by: {author}</p>
		<CommentSection postId={id} />
	</article>
);

export default BlogPost;
