// works like browser back button
const back = () => {
    history.back()
}

// works like browser forward button
const forward = () => {
    history.forward()
}

// jumps to set history point
const go = () => {
    // history.go(3) // forward
    // history.go(-3) // backward
    history.go(0) // current
}