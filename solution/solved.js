window.addEventListener("DOMContentLoaded", () => {

    // Most basic implementation.
    // Only supports selecting by tag name.
    // Iterative traversal using a queue.
    const myDOMSelector = (tagSelectorString, fromRoot = document.body) => {

        const matchingElements = [];

        const queue = [fromRoot];

        const processNode = element => {
            if (element.tagName.toLowerCase() === tagSelectorString) {
                matchingElements.push(element);
            }
        }

        while (queue.length) {
            const node = queue.shift();
            processNode(node);
            if (node.children) queue.push(...Array.from(node.children));
        }

        return matchingElements;

    };

    const myOtherDOMSelector = (() => {

        // No super important reason to use an IIFE here,
        // just allows us to encapsulate some things.

        const selectorToComparisonFunction = (selector) => {

            // Choosing to only support tag names, ids, classes.
            // Not supported: descendant selectors, combination selectors, etc.

            if (selector[0] === '.') { // A class selector.
                return (element, selector) => element.classList.contains(selector.slice(1));
            }

            if (selector[0] === '#') { // An id selector.
                return (element, selector) => element.id === selector.slice(1);
            }

            // Default to a tag selector.
            return (element, selector) => element.tagName.toLowerCase() === selector;
        };

        const traverseAndRunProcess = (node, processorFn) => {
            processorFn(node);
            if (node.children) {
                Array.from(node.children).forEach(n => traverseAndProcess(n, processorFn));
            }
        };

        // Our actual DOM selector function, returned from the IIFE.
        return (selector, fromRoot = document.body) => {

            const matching = [];
            const compareToSelector = selectorToComparisonFunction(selector);

            const process = (element) => {
                if (compareToSelector(element, selector)) {
                    matching.push(element);
                }
            };

            traverseAndRunProcess(fromRoot, process);

            return matching;

        };

    })();

    window.myDOMSelector = myOtherDOMSelector; // To make it available on the DOM.

});