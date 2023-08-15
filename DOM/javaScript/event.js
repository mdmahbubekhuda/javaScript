console.log('javaScript - Events');

// option-1 (embed in HTML tag)
// onclick="document.body.style.backgroundColor='blue'"

// option-2 (embed in HTML tag) - may use sometimes
{/* <button id="btn-blue" onclick="makeBlue()">Make it Blue</button> */ }
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option-3 using onclick
const btnSkyblue = document.getElementById('btn-skyblue');
btnSkyblue.onclick = makeSkyblue; // can also write the function here instead

function makeSkyblue() {
    document.body.style.backgroundColor = '#87CEEB';
}

// option-4 - using addEventListener - most useful - use anonymous function
document.getElementById('btn-yellow').addEventListener('click', function () {
    document.body.style.backgroundColor = 'yellow';
});

// get input text using addEventListener and display text
document.getElementById('btn-post').addEventListener('click', function () {
    // get input text
    const inputValue = document.getElementById('input-field');
    const inputText = inputValue.value;
    // display input text
    const displayComment = document.getElementById('comment-container');
    const newComment = document.createElement('p');
    newComment.innerText = inputText;
    displayComment.appendChild(newComment);
    // clear input field
    inputValue.value = '';
})

// events capture, target, and bubble 
const eventBubbleUl = document.querySelector('#event-bubble ul');
eventBubbleUl.addEventListener('click', function (event) {
    console.log('ul capture');
}, { capture: true });
eventBubbleUl.addEventListener('click', function (event) {
    console.log('ul bubble');
});

const liItems = document.querySelectorAll('#event-bubble li');
for (let liItem of liItems) {
    liItem.addEventListener('click', function (event) {
        console.log('li capture');
    }, { capture: true });
}
for (let liItem of liItems) {
    liItem.addEventListener('click', function (event) {
        console.log('li bubble');
        event.stopPropagation(); // or event.stopImmediatePropagation();
    });
}

// delegation
const ul = document.getElementById('list-container');
ul.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
        event.stopPropagation();
    }
})

document.getElementById('btn-add-item').addEventListener('click', function (event) {
    const li = document.createElement('li');
    li.innerText = 'New item added';
    document.getElementById('list-container').appendChild(li);
})