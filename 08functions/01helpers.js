/**
 *
 * Base Url
 * http://todomvc.com/examples/vanillajs/#/
 *
 *
 * All you have to do is:
 *  - Open url above in your chrome browser
 *  - Open the Sources tab from Chrome devtools
 *  - Create a new snippet
 *  - Add these functions in your new snippet
 *  - Run snippet (Ctrl+Enter)
 *  - Go to the Console tab from Chrome devtools
 *  - Choose function from your snippet and call it in the Console tab
 *
 */

/**
 * About Todo Items
 */

//  Click item
function clickItem(item) {
  item.click();
}

// Toggle all todos
function toggleAll() {
  document.querySelector('#toggle-all').click();
}

//  Toggle a todo
function toggleItemX(x) {
  document.querySelector('ul.todo-list > li:nth-child(' + x + ') input.toggle').click();
}

/**
 * Continue here
 */

// Delete an todo
document.querySelector('ul.todo-list > li:nth-child(1) button.destroy').click();

// Clear completed todos
document.querySelector('button.clear-completed').click();

/**
 * About Filter Todos
 */

// Show completed todos
location.hash = '/completed';

// Show all todos
location.hash = '/';

// Show active todos
location.hash = '/active';

/**
 * About little bit more complex actions
 */

// Create new todo
document.querySelector('input.new-todo').value = 'Hello World!';
document.querySelector('input.new-todo').dispatchEvent(
  new Event('change', {
    bubbles: true
  })
);

// Edit todo
document
  .querySelector('ul.todo-list > li:nth-child(1) > div > label')
  .dispatchEvent(
    new Event('dblclick', {
      bubbles: true
    })
  );
document.querySelector('ul.todo-list > li:nth-child(1) .edit').value =
  'Hello World!';
document
  .querySelector('ul.todo-list > li:nth-child(1) .edit')
  .dispatchEvent(new Event('blur'));
