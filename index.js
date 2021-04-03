window.addEventListener("DOMContentLoaded", () => {

    const myDOMSelector = () => {
        console.group("Hello. Is it me you're looking for?");
        console.dir(document.body); // console.dir is useful if you want to look at DOM nodes.
        console.log("I can see it in your eyes ...")
        console.warn("I can see it in your smile")
        console.groupEnd();
        // Feel free to delete this ^
    };

    window.myDOMSelector = myDOMSelector; // To make it available on the DOM.

});