// https://codepen.io/chriscoyier/pen/YqwXQG

import React, { useState } from "react";
import "./index.css";
import { AddCommentForm } from "./AddCommentForm";
import { NewComment } from "./NewComment";

export function Step18() {
  const [comments, setComments] = useState({});

  function addComment(commentData) {
    var timeStamp = new Date().getTime();

    comments["comment-id" + timeStamp] = { ...commentData, timeStamp };
    setComments({ ...comments });
  }

  return (
    <div className="row medium-8 large-7 columns">
      <ol className="comment-list block-comments">
        {Object.keys(comments).map(key => (
          <li key={key}>
            <NewComment key={key} index={key} details={comments[key]} />
          </li>
        ))}
      </ol>

      <AddCommentForm addComment={addComment} />

      {/* <pre>{JSON.stringify(comments, null, 2)}</pre> */}
    </div>
  );
}
