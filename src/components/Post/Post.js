import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      {/* Avatar + Username */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Sparsh Sukralia"
          src="/images/1.png"
        />
        <h3>Username</h3>
      </div>

      {/* image */}
      <img
        className="post__image"
        src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      />

      {/* username + caption */}
      <h4 className="post__text">
        <strong>codewithsparh</strong> Let's get to work
      </h4>
    </div>
  );
};

export default Post;
