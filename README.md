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

You can achieve this by thinking of the DOM as a *tree* data structure, and **document.body** (i.e. `<body>` element) as your *root node*.

## Unit tests?

That takes a lot more work. 😅 If you solve this project and want to help me by writing some unit tests, I would happily accept a pull request. *Consider this project self-guided and self-tested*.

## Okay, how do I start then?

Go to `http://localhost:8080` after following the directions at the very top of this README. It's not much yet, but this is my killer new app. You can use it for now though to test `document.querySelectorAll` and your reimplementation `myDOMSelector`.

`myDOMSelector` is available on the window object because of the `index.js` file. I suggest using *Google Chrome DevTools Console* to access `myDOMSelector` and invoke it in order to test. You should eventually have it returning expected output, like all the div elements on the page if you call `myDOMSelector("div")` or all the elements with the class name `input-container` if you expand and implement class selection `myDOMSelector(".input-container")`.

Look at the root of your tree, `document.body` and figure out how you can traverse the DOM and find the nodes you're looking for.

### Any hints?

If you want some hints, take the string below, open DevTools in Chrome, and call the function `atob("thecopiedstring")`in your Console. There might also be another way to find them.

```
"LSBZb3Ugc2hvdWxkIG5vdGljZSB0aGF0IGBkb2N1bWVudC5ib2R5YCBoYXMgYSBgY2hpbGRyZW5gIGtleS4gVGhpbmsgb2YgdGhpcyBrZXkgYXMgeW91ciBgbmVpZ2hib3JzYCBpbiBhIGdyYXBoIG9yIHNvbWV0aGluZyBsaWtlIGBsZWZ0YCwgYHJpZ2h0YCBpbiBhIGJpbmFyeSB0cmVlLiBIb3cgd291bGQgeW91IHRyYXZlcnNlIHdpdGggdGhvc2Ugc3RydWN0dXJlcz8gV2hhdCBjYW4geW91IHRyYW5zbGF0ZSB0byB0aGlzIHByb2JsZW0/Ci0gVGhlIGZpcnN0IHByb2JsZW0gInRyZWVRdWFudGl0eSIgb24gdGhlIHByYWN0aWNlIGFzc2Vzc21lbnQgY2FuIGhlbHAgeW91IHRoaW5rIGFib3V0IGhvdyB5b3Ugd291bGQgZmluZCB0aGUgQ09SUkVDVCBub2RlcyBpbiB5b3VyIERPTSB0cmVlLgotIGBkb2N1bWVudC5ib2R5LmNoaWxkcmVuYCBpcyBOT1QgYW4gYXJyYXksIGJ1dCB5b3UgY2FuIG1ha2UgaXQgYW4gYXJyYXkgd2l0aCBgQXJyYXkuZnJvbShjaGlsZHJlbkxpc3QpYCBtdWNoIGxpa2UgeW91IGNhbiBkbyB3aXRoIGEgYFNldGAu"
```
