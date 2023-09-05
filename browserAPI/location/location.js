// location API
console.log(window.location.protocol)
console.log(window.location.host)
console.log(window.location.hostname)
console.log(window.location.port)
console.log(window.location.pathname)
console.log(window.location.search)
console.log(window.location.hash)

// location - href
const href = () => {
    location.href = 'https://www.mozilla.org/en-US/firefox/new/'
}

// location - assign (retains history)
const assign = () => {
    location.assign('https://www.google.com/')
}

// location - replace (removes from history) - can't go back
const replace = () => {
    location.replace('https://www.mozilla.org/en-US/firefox/new/')
}

// location - reload
const reload = () => {
    location.reload()
}