import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <h3>Username</h3>

      {/* image */}
      <img
        className="post__image"
        src="https://images.unsplash.com/photo-1530555144580-18acc0ff779b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />

      {/* username + caption */}
      <h4>codewithsparh This is a cabin</h4>
    </div>
  );
};

export default Post;
