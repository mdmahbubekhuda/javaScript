// browser local storage
const clearItem = localStorage.clear()
const setItem = localStorage.setItem('name', 'Rnk')
const setItem2 = localStorage.setItem('age', '35')
const getItem = localStorage.getItem('name')
const removeItem = localStorage.removeItem('age')
const lengthItem = localStorage.length

// array and object - need to stringify
const setArray = [1, 2, 3, 4, 5]
const stringify = JSON.stringify(setArray)
const parse = JSON.parse(setArray)


console.log(setItem, getItem, lengthItem);