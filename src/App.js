import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post/Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  // [] means the code runs once when the page loads and not again
  // [posts] means the code runs when the page loads and also whenever the content of posts changes
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      // everytime a new post is added this piece of code fires off
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, [posts]);

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2>I am a modal</h2>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>

      {/* Posts */}

      {posts.map(({ id, post }) => {
        return (
          <Post
            key={id}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
