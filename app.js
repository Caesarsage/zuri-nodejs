const fs = require("fs");
const https = require("http");
const path = require("path");
const url = "http://jsonplaceholder.typicode.com/posts";

// writing the posts to result directory
const writeFile = (posts) => {
  fs.writeFile(
    path.join(__dirname, "result", "posts.json"),
    JSON.parse(posts),
    (err) => {
      if (err) {
        console.log("ERROR");
      } else if (!err) {
        console.log("Successful");
      }
    }
  );
};

// function to fetch the json placeholder posts
const fetchJsonPosts = () => {
  https.get(url, (res) => {
    res.setEncoding("utf-8");
    let body = "";
    res.on("data", (data) => {
      body += data;
    });
    res.on("end", () => {
      posts = JSON.stringify(body);
      console.log(JSON.parse(posts));
      writeFile(posts);
    });
  });
};

fetchJsonPosts();
