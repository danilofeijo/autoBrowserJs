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
 *  --- ~/121advancedBots.js (This file)
 *  --- ~/122advancedBots.js
 *  -- Run created snippets following above order (Ctrl+Enter)
 *
 * After execute the last snippet, the functions will be radomly executed
 * Use "clearInterval(randomBot);" command to stop execution
 *
 */

let rando = new function () {

  /**
   * Returns a random value with a limit
   * @param {number} maxRandom - Limit of random value
   */
  function getRandomInt(maxRandom) {
    return Math.floor(Math.random() * maxRandom);
  }

  /**
   * Get a random item from ToDo list
   */
  function getRandomItemIndex(){
    maxTodo = document.querySelectorAll('ul.todo-list li').length;

    if (maxTodo === 0) {
      console.log('Not items to choose from');
      return 0
    }

    selectedItem = getRandomInt(maxTodo) + 1;
    return selectedItem;
  }

  this.toggleAllItems = function() {
    autoTodo.toggleAll();
    console.log('Toggle all items');
  }

  this.selectRandomItem = function() {
    randomItem = getRandomItemIndex();
    
    if (randomItem > 0) {
      autoTodo.toggleItemX(randomItem);
      console.log('Select item ', randomItem);
    }
  }

  this.deleteRandomItem = function() {
    randomItem = getRandomItemIndex();
    
    if (randomItem > 0) {
      autoTodo.deleteItemX(randomItem);
      console.log('Delete item ', randomItem);
    }
  }

  this.clearCompleted = function() {
    autoTodo.clearCompleted();
    console.log('Clear completed items');
  }

  this.filterCompleted = function() {
    autoTodo.filterCompleted();
    console.log('Filter completed items');
  }

  this.filterAll = function() {
    autoTodo.filterAll();
    console.log('Filter all items');
  }

  this.filterActive = function() {
    autoTodo.filterActive();
    console.log('Filter active items');
  }

  this.createRandomTodo = function() {
    newItemText = 'Bot Item ' + Date.now();
    autoTodo.createTodo(newItemText);
    console.log('Create new item: ', newItemText);
  }

  this.amendRandomTodo = function() {
    randomItem = getRandomItemIndex();
    
    if (randomItem > 0) {
      newItemText = 'Amended Bot Item' + Date.now();
      autoTodo.amendTodo(randomItem, newItemText)
      console.log('Amended item ' + randomItem)
    }
  }
}