// get input value
function getInputValue(inputId) {
    const selectInput = document.querySelector(inputId)
    const inputText = selectInput.value
    selectInput.value = ''
    return inputText
}


// add task
document.querySelector('#btn-add').addEventListener('click', function () {
    const selectTable = document.querySelector('#table-body')

    // add index
    const count = selectTable.childElementCount

    // create element
    const tableRow = document.createElement('tr')

    // set task
    const getTask = getInputValue('#task')

    tableRow.innerHTML = `
    <td id="td-number"> ${count + 1} </td>
    <td id="td-description"> ${getTask} </td>
    <td>
        <button id="btn-done" class="btn btn-success">Done</button>
        <button id="btn-delete" class="btn btn-error">Delete</button>
    </td>`

    // append element
    selectTable.appendChild(tableRow)

})

