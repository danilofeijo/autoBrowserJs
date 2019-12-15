/**
 *
 * Base Url
 * http://todomvc.com/examples/vanillajs/#/
 *
 *
 * This is all you have to do:
 *  - Open VanillaJs url in your chrome browser
 *  - Open Chrome devtools
 *  -- Go to Sources tab and create a new snippet 
 *  -- Add below code in the created snippet
 *  -- Run snippet (Ctrl+Enter)
 *
 */


/**
 * This for command creates 100 new todo items.
 * There is a timeout set (200 miliseconds),
 * so the newTodo function is executed after each 200 miliseconds interval
 */

for(i=0; i<=100; i++){
  setTimeout(function newTodo(textValue) {
      document.querySelector('input.new-todo').value = textValue;
      document.querySelector('input.new-todo').dispatchEvent(new Event('change', {bubbles: true}));
  }, i * 200, 'Item number '+i)
}