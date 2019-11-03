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

// Simple setInterval example
var helloLooping = setInterval(function() {
  console.log('Hello!');
}, 1000);

// Create a new Todo every 1000 miliseconds, until reach 10 Todos
let botTodoCounter = 0;

let botCreator = setInterval(function newTodo() {
  document.querySelector('input.new-todo').value =
    'New Todo Number ' + (botTodoCounter + 1);
  document
    .querySelector('input.new-todo')
    .dispatchEvent(new Event('change', { bubbles: true }));

  botTodoCounter++;

  if (botTodoCounter >= 10) {
    clearInterval(botCreator);
  }
}, 1000);
