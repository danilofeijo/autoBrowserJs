/**
 *
 * Base Url
 * http://todomvc.com/examples/vanillajs/#/
 *
 *
 * This is all you have to do:
 *  - Open VanillaJs url in your chrome browser
 *  - Open the Bookmark Manager (Ctrl + Shift + O)
 *  - Create a new bookmark
 *  -- Add a name to the new bookmark
 *  -- Put one of available code in the Url field
 *  -- Save
 *  - Call the created bookmark
 *
 */

// Simple browser alert
javascrip:(function() {alert('Hey ho, lets go!');})()

// Create X Todos
javascrip: (function() {
  max = prompt('How many todos?');
  if (max) {
    for(i=1; i<=max; i++){
      setTimeout(function newTodo(textValue) {
          document.querySelector('input.new-todo').value = textValue;
          document.querySelector('input.new-todo').dispatchEvent(new Event('change', {bubbles: true}));
      }, i * 500, 'Item number '+i)
    }
  }
})()

/**
 * Currently I'm not able to run these code as a bookmarklet.
 * 
 * These codes have been worked only if you run them on the browser DevTools :(
 */