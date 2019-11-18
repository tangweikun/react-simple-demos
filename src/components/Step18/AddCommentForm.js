import React, { useState } from "react";
import "./index.css";

export function AddCommentForm(props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function processComment(event) {
    event.preventDefault();

    // 1. Take data from from form
    var commentData = {
      commentName: name,
      commentBody: desc
    };

    // 2. Pass data back to App
    props.addComment(commentData);

    // 3. Reset the form
    setName("");
    setDesc("");
  }

  return (
    <div className="callout secondary">
      <h4 className="leave-comment">Add a Comment</h4>
      <form className="post-edit" onSubmit={processComment}>
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={e => setName(e.target.value)}
        />
        <textarea
          value={desc}
          placeholder="Add your comment here"
          onChange={e => setDesc(e.target.value)}
        />
        <button
          id="submit"
          type="submit"
          className="button button-outline comment-button action-button expand-right"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
}
