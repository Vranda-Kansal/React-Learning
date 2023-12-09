# npm

its full form is not Node package manager\
Npm manages packages\

# Add node packager (npm) in your app

package.json: this is bascially the confriguation of npm\

# bundler

what is a bundler: a bundler helps you to bundle whole code, means cached whole code, clean whole code, compressed whole code this is the work of bundler.\
Bundle helps to do all this so that we can deploy that in production.\

# parcel

this is a bundler. It is package install using npm.\

npm i -D parcel? why -D? because I want to use it at development time.\

^2.10.3

Meaning of ^ means when ever a minor updation comes in the version then update it.\
whereas ~ use to upgrade when a major updation comes into picture\
always use ^.\

package-lock.json :- it keeps the record of every exact version our package.json would be same as before but our package-lock.json would take care of every minuet upgradation in version or anything of evry package which we installed.\

node-modules: contains all the code which we fetch from the npm like the parcel code.\

npx: npx means executing the package. means it excecuting the bundler or parcel
npx parcel index.html\

CDN are not good way use npm i react\

# Parcel

- Dev Build: development environment for u
- Local server
- Refreshing our page automatically (HMR)- Hot Module Replacement
- by using file watching algorithm - C++ - whenever there is change in our file parcel will automaticallly build it again
- parcel caching things for u - Faster builds in parcel-cache
- Image optimization
- Minification of file also - when we do production code
- Bundling
- Compress the code like in dist
- React is fast because of the parcel or other things too
  which makes react fast parcel doing so many things parcel also using other for his help
- consistent Hashing
- Code splitting
- Differential bundling - our app can be open in different or older version of chrome then parcel would do all this for us means different bundle for differnt app
- Diagnostic
- Error handling
- HTTPs hosting can also be done using parcel
- Tree Shaking : remove unused code for u
- Different dev and prod bundles

# JSX

- Html like stynax in js
- jsx is not html in JS. JSX has HTML/XML like syntax
- jsx heading is also a react element.
- const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>; (jsxHeading is also a react element like the previous one which was created by core react using react.createElement());
- its like only a syntax so make we developer experience easy.
- js Engine only understand ECMAscript not jsx.
- it is not purely js.
- JSX code is transpiled before it reaches to the js engine and that whole work is done by parcel but parcel alone is not all this for us parcel is using babel so its babel job.
- JSX => React.createElement => ReactElement-JS object => HTMLElement(render);
- so babel is job is to convert the JSX into React.createElement code.
- use bracket if u write jsx in multiple lines (<h1>jsx</h1>)
- does not return two jsx from component as u can not return 2 objects from function. so either wrap them in fragments.
- inside {} u can write any type of javascript (super power)
- it makes our code readable.

# React component

- Class Based Component: OLD
- Functional Component: New

# React Functional Component

- its a normal js Function which return some jsx
- name Component in Capital letter
- at the end it is js fun which return some jsx so if we call that component inside render under the hood it calls the component which return jsx so in react calling a fun or compoent can done using </> like <HeadingComponent /> = HeadingConponent()
- Component Composition - Component inside Component
- jsx takes care of melicious attack mean while sanatize it more formely it does not blindly run anything inside {} it checks everything (So powerful attack).
- {Title()} = <Title /> = <Title><Title />
