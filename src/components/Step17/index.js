import "./index.css";
import React, { useState, useEffect } from "react";
import { SearchProfile } from "./SearchProfile";
import { Profile } from "./Profile";

const API = "https://api.github.com/users";

export function Step17() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchProfile("tangweikun");
  }, []);

  function fetchProfile(username) {
    let url = `${API}/${username}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
      });
  }

  return (
    <section id="card">
      <SearchProfile fetchProfile={fetchProfile} />
      <Profile data={userInfo} />
    </section>
  );
}
