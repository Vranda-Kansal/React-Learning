//imports comes from our node modules now
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const HeadingComponent = () => {
  return <h1>Hi from functional component</h1>;
};
console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
