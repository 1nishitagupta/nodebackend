require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT;

const gitHub = {
  login: "1nishitagupta",
  id: 72570140,
  node_id: "MDQ6VXNlcjcyNTcwMTQw",
  avatar_url: "https://avatars.githubusercontent.com/u/72570140?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/1nishitagupta",
  html_url: "https://github.com/1nishitagupta",
  followers_url: "https://api.github.com/users/1nishitagupta/followers",
  following_url:
    "https://api.github.com/users/1nishitagupta/following{/other_user}",
  gists_url: "https://api.github.com/users/1nishitagupta/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/1nishitagupta/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/1nishitagupta/subscriptions",
  organizations_url: "https://api.github.com/users/1nishitagupta/orgs",
  repos_url: "https://api.github.com/users/1nishitagupta/repos",
  events_url: "https://api.github.com/users/1nishitagupta/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/1nishitagupta/received_events",
  type: "User",
  site_admin: false,
  name: "Nishita Gupta",
  company: null,
  blog: "https://my-portfolio-1nishitagupta.vercel.app/",
  location: "Jaipur",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 35,
  public_gists: 0,
  followers: 29,
  following: 16,
  created_at: "2020-10-08T16:44:50Z",
  updated_at: "2024-01-18T07:04:48Z",
};

app.get("/", (req, res) => {
  res.send("Hello Backend API");
});

app.get("/twitter", (req, res) => {
  res.send("g.nishi9525");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.get("/github", (req, res) => {
  res.json(gitHub);
});

app.listen(port, () => {
  console.log(`Hello Backend , you port is ${port}`);
});
