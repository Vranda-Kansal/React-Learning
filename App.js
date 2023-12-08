//imports comes from our node modules now
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from nested 🚀"),
    React.createElement("h2", {}, "I m h2"),
  ])
);
console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React"
);
// console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
