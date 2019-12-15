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
 *  -- Add below object in the created snippet
 *  -- Run snippet (Ctrl+Enter)
 *  -- Go to Console tab and call one of available functions into the object
 *
 */

var autoTodo = new function () {
/**
 * Actions for todos
 */

  //  Click item
  this.clickItem = function(item) {
    item.click();
  }

  // Toggle all todos
  this.toggleAll = function() {
    document.querySelector('#toggle-all').click();
  }

  //  Toggle a todo
  this.toggleItemX = function(x) {
    document
      .querySelector('ul.todo-list > li:nth-child(' + x + ') input.toggle')
      .click();
  }

  // Delete an todo
  this.deleteItemX = function(x) {
    document
      .querySelector('ul.todo-list > li:nth-child(' + x + ') button.destroy')
      .click();
  }

  // Clear completed todos
  this.clearCompleted = function() {
    document.querySelector('button.clear-completed').click();
  }


  /**
   * Filters
   */

  // Show completed todos
  this.filterCompleted = function() {
    location.hash = '/completed';
  }

  // Show all todos
  this.filterAll = function() {
    location.hash = '/';
  }

  // Show active todos
  this.filterActive = function() {
    location.hash = '/active';
  }


  /**
   * More complex actions
   */

  // Create new todo
  this.createTodo = function(textValue) {
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
  this.amendTodo = function(x, amendValue) {
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
}