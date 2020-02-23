import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useDropdown from "./useDropdown";
import Results from "./Results";

const Reddit = () => {

    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
    const [subreddit, SubredditDropdown] = useDropdown("Subreddit", "all", ["all", "askreddit","funny", "pics", "reactjs", "videos"])

    async function requestPosts(){
      var reqURL = `https://www.reddit.com/r/${subreddit}/.json`

      const response = await fetch(reqURL)
      const json = await response.json()

      console.log(json)

      setPosts(json.data.children || [])
    }

    return (
      <div className="search-params">

        <form
          onSubmit = { e => {
            e.preventDefault()
            requestPosts()
          }}
        >
          <h2>{searchTerm}</h2>
          <input
            onChange = {e => setSearchTerm(e.target.value)}
            placeholder = "Search Term"
          ></input>
          <SubredditDropdown></SubredditDropdown>
          <button>Submit</button>
        </form>

        <Results posts={posts}/>
      </div>
    )
}

const App = () => {
    return (
      <div className="container">
        <h1>Reddit Posts</h1>
        <Reddit></Reddit>

      </div>
    );
  };


  ReactDOM.render(<App />, document.getElementById("root"));