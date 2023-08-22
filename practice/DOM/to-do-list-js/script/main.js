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
    // create element
    const count = selectTable.childNodes.length
    const tableRow = document.createElement('tr')
    tableRow.classList.add('dynamic-row')
    tableRow.innerHTML = `
    <td class="td-number"> ${count + 1} </td>
    <td id="td-description"> ${getTask} </td>
    <td class="flex gap-4 flex-row">
        <button id="btn-done" class="btn btn-success">Done</button>
        <button id="btn-delete" class="btn btn-error">Delete</button>
    </td>`

    // append element
    selectTable.appendChild(tableRow)

}

// event handler to-do-list
document.querySelector('#to-do-list').addEventListener('click', function (e) {
    // add task by click (add button)
    if (e.target.matches('#btn-add')) setTask()
    // add task by key press (Enter and NumpadEnter)
    document.querySelector('#task').addEventListener('keyup', function (e) {
        e.stopImmediatePropagation()
        if (e.code === 'Enter' || e.code === 'NumpadEnter') setTask()
    })
    // done task
    if (e.target.matches('#btn-done')) e.target.closest('.dynamic-row').style.textDecoration = 'line-through'
    // delete task
    if (e.target.matches('#btn-delete')) {
        e.target.closest('.dynamic-row').remove()
        // fixing serial number
        let count = 1
        document.querySelectorAll('.td-number').forEach((element) => element.innerText = count++)
    }
    // clear all task
    if (e.target.matches('#btn-clear')) document.querySelector('#table-body').innerHTML = ''
})