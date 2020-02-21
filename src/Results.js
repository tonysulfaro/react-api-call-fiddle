import React from "react";
import RedditPost from "./RedditPost"

const Results = ({ posts }) => {

  console.log(posts)

  return (
    <div className="search">
      {!posts.length ? (
        <h1>No Posts Found</h1>
      ) : (
        posts.map(post => {
          return (
            <RedditPost key={post.data.id} post = {post.data} />
          );
        })
      )}
    </div>
  )
}


export default Results;
