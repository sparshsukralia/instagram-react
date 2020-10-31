import React from "react";
import "./App.css";
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>

      {/* Posts */}
      <Post
        username="codewithsparsh"
        caption="Let's get to work!!"
        imageUrl="https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
