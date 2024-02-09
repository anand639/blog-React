import React, { useState } from "react";
const CommentSection = ({ postId }) => {
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");
	const addComment = () => {
		if (!newComment.trim()) return;
		const comment = { id: comments.length + 1, text: newComment };
		setComments([...comments, comment]);
		setNewComment("");
	};
	return (
		<section className="commentSection">
			<h3>Comments</h3>
			<div className="comments">
				{comments.map((comment) => (
					<p key={comment.id}>{comment.text}</p>
				))}
			</div>
			<input
				type="text"
				value={newComment}
				onChange={(e) => setNewComment(e.target.value)}
				placeholder="Write a comment..."
			/>
			<button onClick={addComment}>Add Comment</button>
		</section>
	);
};

export default CommentSection;
