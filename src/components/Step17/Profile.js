import "./index.css";
import React from "react";

export function Profile(props) {
  const { data } = props;

  if (!data.name) {
    return (
      <div className="notfound">
        <h2>Oops !!!</h2>
        <p>该用户不存在</p>
      </div>
    );
  }

  return (
    <section className="github-profile-wrapper">
      <div className="github-profile-info">
        <a href={data.html_url} target="_blank" title={data.name}>
          <img src={data.avatar_url} alt={data.name} />
        </a>
        <h2>
          <a href={data.html_url} title={data.name} target="_blank">
            {data.name}
          </a>
        </h2>
        <h3>{data.location}</h3>
      </div>
      <div className="github-profile-detail">
        <ul>
          <li>
            <i>{data.followers}</i>
            <span>Followers</span>
          </li>
          <li>
            <i>{data.public_repos}</i>
            <span>Repositoriy</span>
          </li>
          <li>
            <i>{data.following}</i>
            <span>Following</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
