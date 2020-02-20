const RedditPost = ({post}) => {

  return (
    <a href="">
      <div className="post-container">
      <h2>{post.title}</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta quos, accusamus deleniti tenetur alias blanditiis quibusdam ipsam harum quisquam amet ratione ea? Quo nesciunt, voluptates fuga quisquam voluptatem nihil.</p>
      <p>Ups:  Downs:</p>
      <p>Comments:</p>
    </div>
    </a>
  )
}

const Reddit = () => {

    var post = { title:"test title"}

    return (
        <div>
            <h2>Posts:</h2>
            <RedditPost post={post}></RedditPost>
            <RedditPost post={post}></RedditPost>
            <RedditPost post={post}></RedditPost>
            <RedditPost post={post}></RedditPost>
        </div>
    )
}

const App = () => {
    return (
      <div className="container">
        <h1>Reddit Front Page</h1>
        <Reddit></Reddit>

      </div>
    );
  };


  ReactDOM.render(<App />, document.getElementById("root"));