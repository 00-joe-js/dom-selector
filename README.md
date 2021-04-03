```
npm install -g http-server
```

Then, in same directory as the `index.html` file:
```
http-server .
```

You should now be able to go to `http://localhost:8080` in Google Chrome and see my website. What do you think?

# Project Goal

You want to **implement your own version of `document.querySelectorAll`**.
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll 

An important constraint here is *you should not use any other available DOM selector methods* like `getElementById`, `getElementsByClassName`, etc.. This constraint is valuable because it will lead you to having to use the DOM as a tree data structure.

You do not have to implement every feature/functionality of `document.querySelectorAll`; you can start with having it work with just HTML tag names e.g. `myDOMSelector("div")`, `myDOMSelector("h1")`.

When you call `myDOMSelector("div")`, you want to return an array of all of the `div` elements currently on the DOM (i.e. currently available on the web page).

You can achieve this as thinking of the DOM as a *tree* data structure, and *document.body* (i.e. `<body>` element) as your *root node*.

## Unit tests?

That takes a lot more work. 😅 If you solve this project and want to help me by writing some unit tests, I would happily accept a pull request. *Consider this project self-guided and self-tested*.

## Okay, how do I start then?

Go to `http://localhost:8080` after following the directions at the very top of this README. It's not much yet, but this is my killer new app. You can use it for now though to test `document.querySelectorAll` and your reimplementation `myDOMSelector`.

`myDOMSelector` is available on the window object because of the `index.js` file. I suggest using *Google Chrome DevTools Console* to access `myDOMSelector` and invoke it in order to test. You should eventually have it returning expected output, like all the div elements on the page if you call `myDOMSelector("div")` or all the elements with the class name `input-container` if you expand and implement class selection `myDOMSelector(".input-container")`.

Look at the root of your tree, `document.body` and figure out how you can traverse the DOM and find the nodes you're looking for.

### Any hints?

If you want some hints, take the string below, open DevTools in Chrome, and call the function `atob("thecopiedstring")`in your Console.

- You should notice that `document.body` has a `children` key. Think of this key as your `neighbors` in a graph or something like `left`, `right` in a binary tree. How would you traverse with those structures? What can you translate to this problem?

- The first problem "treeQuantity" on the practice assessment can help you think about how you would find the CORRECT nodes in your DOM tree.

- `document.body.children` is NOT an array, but you can make it an array with `Array.from(childrenList)` much like you can do with a `Set`.