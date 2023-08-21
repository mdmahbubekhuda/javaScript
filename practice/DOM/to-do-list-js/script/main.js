// get input value
function getInputValue(inputId) {
    const selectInput = document.querySelector(inputId)
    const inputText = selectInput.value
    selectInput.value = ''
    return inputText
}
// function set task
function setTask() {
    // validation for empty input value
    const getTask = getInputValue('#task')
    if (getTask === '') return alert('No task is assigned')

    // add element
    const selectTable = document.querySelector('#table-body')
    // add index number
    const count = selectTable.childElementCount
    // create element
    const tableRow = document.createElement('tr')
    tableRow.classList.add('dynamic-row')
    tableRow.innerHTML = `
    <td id="td-number"> ${count + 1} </td>
    <td id="td-description"> ${getTask} </td>
    <td class="flex gap-4 flex-row">
        <button id="btn-done" class="btn btn-success">Done</button>
        <button id="btn-delete" class="btn btn-error">Delete</button>
    </td>`
    // append element
    selectTable.appendChild(tableRow)
}

// event handler
document.querySelector('#to-do-list').addEventListener('click', function (e) {
    // add task
    if (e.target.matches('#btn-add')) setTask()
    // done task
    if (e.target.matches('#btn-done')) e.target.closest('.dynamic-row').style.textDecoration = 'line-through'
    // delete task
    if (e.target.matches('#btn-delete')) e.target.closest('.dynamic-row').remove()
    // clear all task
    if (e.target.matches('#btn-clear')) document.querySelector('#table-body').innerHTML = ''

})

