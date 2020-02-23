import React from "react";

const RedditPost = ({post}) => {

    return (
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        <div className="post-container">
            <h2>{post.title}</h2>
            <p><img src={post.thumbnail} alt={post.title}/></p>
            <p><strong>/r/{post.subreddit}</strong></p>
            <p>Score: {post.score}</p>
            <p>Comments: {post.num_comments}</p>
      </div>
      </a>
    )
  }

export default RedditPost;