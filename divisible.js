// foobar function approach
function foobar(num) {
    for (let i = 1; i <= num; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log('foobar');
        }
        else if (i % 3 === 0) {
            console.log('foo');
        }
        else if (i % 5 === 0) {
            console.log('bar');
        }
        else {
            console.log(i);
        }
    }
}

const foobarNum = 50;
foobar(foobarNum);


// foobar simple approach
for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar');
    }
    else if (i % 3 === 0) {
        console.log('foo');
    }
    else if (i % 5 === 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}