<!-- How do Broswer knows the createElement or getElementById ?
as these all are super powers that browser already have with js engine. -->

#

 <div id="root">
        <!-- we are trying to inject the heading via script in our html -->
        <script>
            // lets create a h1 tag via createElement
            const heading = document.createElement("h1");
            heading.innerHTML = "Hello World from javascript";
            //write a hello text inside the h1 tag
            //finding where is my root..
            //now we got the root
            const root = document.getElementById("root");
            root.appendChild(heading);

        </script>

 </div>

# Now we will try to do the same using react?

How can we do that?
For that we need the react to be in our project.
there are 2 ways to inject react in our code
1-> Via CDN:
what is CDN? content delivery network which allow you to access the appilcation code in your project via link from the near by server to us.

What are there in The CDN links? Basically these all are the JS function at last React is the JS library so after add CDN link we have basically the react code in our project.

Till now there in nothing in our project..
but lets write the React in our console and run React
Wow!! something amazing comes up basically a object is printed.
where is this coming from?
its coming from the react we have injected earlier via CDN links and now it is available for us to use

# Why there are two CDN links?

basically first one is the core react thing
while the other one is react library used for DOM manipulation means for DOM updation its like a bridge btm the react and browser

# Why don't just collab them in one file?

as react does not only used for web but also for android or other prespective
therefore they are separated.

# first element by React

 <script>
      //just creating the h1 tag inside react this is the responsibilty of core react
      const heading = React.createElement("h1", {}, "Hello from React");
      //so when we went to put that element into our dom then we use ReactDOM
      //this root is basically where all the react code will run
      //everything we will render would be render inside inside this root
      const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(heading);
</script>

most important operation or heavy operation in website is
Dom manipulation
its the most costly thing

React trying is optimize this operation so that it can be done efficiently. or do manipulation using js

# const heading = React.createElement("h1", {}, "Hello from React");

what is {} : This is the place where you pass attribute to ur tags. Now what are these tags? suppose our h1 should have a id :"heading" then this is the attribute.
{id: "heading"}

# console.log(heading);

then this is not a html
this is an object a react element at the end of the day

# What is react element?

this is nothing but a normal js object.

# root.render(heading);

this render method is responsible for taking the js object and convert that into html then render it on page(DOM manipulation)

# how to create complex structure in react?

{
/\*

 <div>
    <div>
        <h1></h1>
    </div>
</div>
*/
}

//how to create complex structure in react
//lets see

const parent = React.createElement(
"div",
{ id: "parent" },
React.createElement(
"div",
{ id: "child" },
React.createElement("h1", {}, "Hello from nested")
)
);
console.log(parent);

React element is just a js Obejct when we render then it would get converted to html before than react element is Js object
Inside my props there is children inside that the inner tags comes in see the react element object

# if two elements as sibling then or if multiple children

const parent = React.createElement(
"div",
{ id: "parent" },
React.createElement("div", { id: "child" }, [
React.createElement("h1", {}, "Hello from nested"),
React.createElement("h2", {}, "I m h2"),
])
);
pass them in an array of childrens.
if we create the tags like that using create element then it would be so messy there the jsx comes into picture.

#

 <div id="root">
      <h1>We are already here</h1>
    </div>

root.render() will \*replaced everything which is present in the root. like h1 gets replaced by the parent

whatever there is in the root evrything will get replaced by the all we pass in the render method.

React will work only in the place which you have as a root other code on top and bottom would be untouched.
