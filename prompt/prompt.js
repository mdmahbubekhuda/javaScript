// alert
const alertFn = () => {
    alert('js alert')
}

// confirm
const confirmFn = () => {
    const confirmReturn = confirm('Are you confirm?') // returns: boolean

    return (confirmReturn === true)
        ? alert('true')
        : alert('false')

    // console.log(confirmReturn)
}

// prompt
const promptFn = () => {
    const promptReturn = prompt('Prompt Message:') // returns: text/null(cancel)

    console.log(promptReturn);
}