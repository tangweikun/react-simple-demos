import "./index.css";
import React, { useState } from "react";

export function SearchProfile(props) {
  const { fetchProfile } = props;
  const [username, setUsername] = useState("tangweikun");

  function handleForm(e) {
    e.preventDefault();
    fetchProfile(username);
  }

  return (
    <div className="search-box">
      <form onSubmit={handleForm}>
        <label>
          <input
            onChange={e => setUsername(e.target.value)}
            type="search"
            placeholder="Type Username + Enter"
          />
        </label>
      </form>
    </div>
  );
}
