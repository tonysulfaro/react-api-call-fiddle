import React from "react";

const RedditPost = ({post}) => {

    return (
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        <div className="post-container">
        <h2>{post.title}</h2>
        <p><strong>/r/{post.subreddit}</strong></p>
        <p>Socre: {post.score}</p>
        <p>Comments: {post.num_comments}</p>
      </div>
      </a>
    )
  }

export default RedditPost;