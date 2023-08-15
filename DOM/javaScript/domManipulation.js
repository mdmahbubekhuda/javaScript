console.log('adding sections to main tag - javaScript');

// create element 
const createSection = document.createElement('section');
const createH1 = document.createElement('h1');
createH1.innerText = 'DOM Manipulation - javaScript';
const createUl = document.createElement('ul');

// innerHTML - another way to create elements
const createLi = document.createElement('li');
createLi.innerHTML = `
    <li>hello world!</li>
    <li>hello world!</li>
    <li>hello world!</li>
`;

// add element
// target parent element
const getMain = document.getElementById('main-container');
// before specific child
const beforeChild = document.querySelector('.comment-section');
getMain.insertBefore(createSection, beforeChild);
// as last child
createSection.appendChild(createH1);
createSection.appendChild(createUl);
createUl.appendChild(createLi);

// styles for newly created elements
createSection.style.width = '400px';
createSection.style.backgroundColor = 'violet';
createSection.style.textAlign = 'center';
createSection.style.margin = '2rem auto';
createSection.style.padding = '2rem';
createLi.style.listStyle = 'none';
createLi.style.color = 'yellow';