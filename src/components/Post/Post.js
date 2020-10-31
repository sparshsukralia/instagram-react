import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Post.css";

const Post = ({ username, caption, imageUrl }) => {
  return (
    <div className="post">
      {/* Avatar + Username */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Sparsh Sukralia"
          src="/images/1.png"
        />
        <h3>{username}</h3>
      </div>

      {/* image */}
      <img className="post__image" src={imageUrl} />

      {/* username + caption */}
      <h4 className="post__text">
        <strong>{username}</strong>
        {caption}
      </h4>
    </div>
  );
};

export default Post;
