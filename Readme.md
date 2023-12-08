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
