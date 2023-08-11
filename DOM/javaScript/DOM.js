// DOM - Document Object Model
console.log('hello world!');

// getElementsByTagName() - returns HTML collection (array like object)
const getTag = document.getElementsByTagName('h1');

// getElementById() - returns element
const getId = document.getElementById('get-id');

// getElementByClass() - returns HTML collection (array like object)
const getClass = document.getElementsByClassName('get-class');

// get query like css selector - returns one element
const getQuery = document.querySelector('nav li');

// get query like css selector - returns all elements in node list
const getQueryAll = document.querySelectorAll('#nav-id .li-class');


console.log(getQueryAll);