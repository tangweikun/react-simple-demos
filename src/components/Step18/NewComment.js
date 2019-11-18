import React from "react";
import "./index.css";

export function NewComment(props) {
  return (
    <div className="block-comment-content module text">
      <div className="comment-user">
        <div className="comment-user-avatar-wrap">
          <a>
            <img
              src="//s3-us-west-2.amazonaws.com/s.cdpn.io/3/profile/profile-512_29.jpg"
              className="comment-avatar"
              alt=""
            />
          </a>
        </div>
        <div className="comment-user-text">
          <a href="#0" data-username="cathbailh" className="comment-username">
            <span className="username">{props.details.commentName}</span>
          </a>
          <span className="on"> on </span>
          <a href="#0">
            <time className="block-comment-time">
              {new Date(props.details.timeStamp).toLocaleDateString()}
            </time>
          </a>
        </div>
      </div>

      <div className="comment-text">
        <p>{props.details.commentBody}</p>
      </div>
    </div>
  );
}
