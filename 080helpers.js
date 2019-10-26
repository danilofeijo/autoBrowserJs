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
 *  -- Add below functions in the created snippet
 *  -- Run snippet (Ctrl+Enter)
 *  -- Go to Console tab and call one of available functions
 *
 */

/**
 * Actions for todos
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
  document
    .querySelector('ul.todo-list > li:nth-child(' + x + ') input.toggle')
    .click();
}

// Delete an todo
function deleteItemX(x) {
  document
    .querySelector('ul.todo-list > li:nth-child(' + x + ') button.destroy')
    .click();
}

// Clear completed todos
function clearCompleted() {
  document.querySelector('button.clear-completed').click();
}

/**
 * Filters
 */

// Show completed todos
function filterCompleted() {
  location.hash = '/completed';
}

// Show all todos
function filterAll() {
  location.hash = '/';
}

// Show active todos
function filterActive() {
  location.hash = '/active';
}

/**
 * More complex actions
 */

// Create new todo
function createTodo(textValue) {
  document
    .querySelector('input.new-todo')
    .value = textValue;

  document
    .querySelector('input.new-todo')
    .dispatchEvent(
      new Event('change', {
        bubbles: true
      })
    );
}

// Edit todo
function amendTodo(x, amendValue) {
  document
    .querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label')
    .dispatchEvent(
      new Event('dblclick', {
        bubbles: true
      })
    );

  document
    .querySelector('ul.todo-list > li:nth-child(' + x + ') .edit')
    .value = amendValue;
    
  document
    .querySelector('ul.todo-list > li:nth-child(' + x + ') .edit')
    .dispatchEvent(new Event('blur'));
}