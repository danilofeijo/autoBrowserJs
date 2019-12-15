/**
 *
 * Base Url
 * http://todomvc.com/examples/vanillajs/#/
 *
 *
 * This is all you have to do:
 *  - Open VanillaJs url in your chrome browser
 *  - Open Chrome devtools
 *  -- Go to Sources tab and create new snippets for given files:
 *  --- ~/082objects.js
 *  --- ~/121advancedBots.js
 *  --- ~/122advancedBots.js (This file)
 *  -- Run created snippets following above order (Ctrl+Enter)
 *
 * After execute the last snippet, the functions will be radomly executed
 * Use "clearInterval(randomBot);" command to stop execution
 *
 */

const randomBot = setInterval(function () {
  let theFunctions = [];
  
  for (let prop in rando) {
    if (typeof rando[prop] === 'function') {
      theFunctions.push(prop);
    }
  }
  
  const randomFunctionIdex = Math.floor(Math.random() * theFunctions.length);
  rando[theFunctions[randomFunctionIdex]]()
}, 2000);