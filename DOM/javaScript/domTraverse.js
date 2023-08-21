// DOM - Document Object Model
console.log('Traversing');

// getElementsByTagName() - returns HTML collection (array like object)
console.log(document.getElementsByTagName('h1'));
// getElementById() - returns element
console.log(document.getElementById('get-id'));
// getElementByClass() - returns HTMLCollection (array like object)
console.log(document.getElementsByClassName('get-class'));

// get query like css selector - returns one element
console.log(document.querySelector('nav li'));
// get query like css selector - returns all elements in nodeList
console.log(document.querySelectorAll('#nav-id .li-class'));

// set style to elements (if HTMLCollection or nodeList must use [index])
document.getElementById('get-id').style.color = 'violet';
document.getElementsByClassName('li-class')[1].style.color = 'red';

// HTML attribute
const titleAttribute = document.getElementById('get-id');
console.log(titleAttribute.getAttributeNames()); // returns array of string containing attribute names
console.log(titleAttribute.getAttributeNode('class')); // returns array of string containing attribute names
console.log(titleAttribute.getAttribute('class')); // get attribute
console.log(titleAttribute.removeAttribute('class')); // remove attribute
console.log(titleAttribute.setAttribute('class', 'get-class')); // set attribute

// class attributes 
console.log(titleAttribute.className); // gets class name

console.log(titleAttribute.classList); // returns DOM token list
titleAttribute.classList.add('random-class');
console.log(titleAttribute.classList);
titleAttribute.classList.remove('random-class');
console.log(titleAttribute.classList);

// get innerText - gets the texts
console.log(document.getElementById('get-id').innerText);
// set innerText 
document.getElementById('get-id').innerText = 'Added by javaScript';

// get innerHTML - returns HTML elements
console.log(document.getElementById('nav-id').innerHTML);
// set innerHTML - removes previous HTML elements and set new elements
document.getElementById('innerHTML-id').innerHTML = `
<h2>Set by innerHTML</h2>
<ul>
  <li>javaScript</li>
  <li>javaScript</li>
  <li>javaScript</li>
</ul>
`;

// DOM Traversing
// parent-child-sibling 
const getElement = document.getElementById('nav-id');
console.log(getElement);
// parent element/node(parentNode)
console.log(getElement.parentElement);
// child element/node(childNode) 
console.log(getElement.children);
// sibling element/node
console.log(getElement.nextElementSibling);
console.log(getElement.previousElementSibling);

// closest ancestor with specific css selector
console.log(getElement.closest('#get-id'));
