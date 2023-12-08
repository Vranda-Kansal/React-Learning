{
  /*
 <div>
    <div>
        <h1></h1>
        <h2></h2>
    </div>
</div>
*/
}

//how to create complex structure in react
//lets see

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from nested"),
    React.createElement("h2", {}, "I m h2"),
  ])
);
console.log(parent);

//just creating the h1 tag inside react this is the responsibilty of core react
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React"
);
// console.log(heading); //object
//so when we went to put that element into our dom then we use ReactDOM
//this root is basically where all the react code will run
//everything we will render would be render inside inside this root
const root = ReactDOM.createRoot(document.getElementById("root"));
//render my parent inside the root.
root.render(parent);
