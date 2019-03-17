# movieList
Creating a movie list using React.js

Before beginning movieList:
1) I did a tutorial on reactjs.org up till handling events section. https://reactjs.org/docs/hello-world.html
2)Read through Recastly sprint


Set up workspace:
1) mkdir main folder
2) created index.html, and source folder
3) created component folder, data floder and index.js

Set up Dev environment:
4) set up npm init for the package.json 
    -set up dependacies and devdependacies
    -create script fot live-server and babel transpiler
5) set up git init for .gitignore

Set up:
6) npm install and npm run build

7) created an element and rendering it in DOM

---Problems encountered: linking data list to App
8) solved by console logging on App.jsx before the return statement.

9) extended React component on App

10) created movie.jsx and movieList.jsx , so that we can pass them in the components

11) having problem with props, console logging and checking each files. ex:props.movie.title

12) Created the search input, but had trouble matching the search value to existing movieList. 
// handle search ahs 2 event handler: 1) handle the search text 2) handle the submit button

13) Created add, which is similar to the search. Replacing the search list with newly added movies

14) Use bootstrap for tab and badge
tab: https://getbootstrap.com/docs/4.3/components/navs/
badge:https://getbootstrap.com/docs/4.3/components/list-group/

15) debugging process, cant find parent constructor: added </div>

16) XX is not a function: check uppercase and lowercase

17) to chnage thestate, dont forget : [on setState: the key needs to call "this.state"]

------------------------------------------------------------
Notes:

[1] REACT COMPONENT & ELEMENTS

A React Component is a template. A blueprint. A global definition. 
This can be either a function or a class (with a render function).

A React Element is what gets returned from components. 
They are just objects in memory and we can’t change anything about them.

React internally creates, updates, 
and destroys instances to figure out the DOM elements tree that needs to be rendered to the browser.

The bottom line is that ReactDOM does not render components in the browser, 
and it does not render elements either (in the sense of keeping the term element to 
represent the result of React.createElement). It also does not render instances. 
It renders DOM elements.

You’ll use ReactDOM.render() to render a React Element into a particular DOM element, 
and the return value of ReactDOM.render() will be the React Component instance.

ReactDOM.render() is just React’s way of instantiating a Component for you

[2] SUPER()

super() is used to call the parent constructor.

super(props) would pass props to the parent constructor.

From your example, super(props) would call the React.Component constructor passing in props as the argument.