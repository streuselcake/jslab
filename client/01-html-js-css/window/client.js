// jshint esversion: 6

// see:
// https://www.w3schools.com/js/js_window.asp

// browser info
console.dir(window.navigator);

//console.log(window);
console.log(window.screenX + ", " + window.screenY);
console.log(window.innerWidht + ", " + window.innerHeight);

// many properties of the window provide window-functions
console.dir(window.history);
// haha:
//window.history.back();


// many objects are accessible without the window. prefix:
// e.g. window.screen <-> screen and window.document <-> document)
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);

// What will be rendered for the user
console.dir(document);
