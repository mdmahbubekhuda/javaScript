// practice problem 1
const multiplication = (x, y, z) => x * y * z
console.log(multiplication(1, 2, 3));

const threeLines = `I am a web developer.
I love to code.
I love to eat biryani.`
console.log(threeLines);

const defaultParameter = (a, b = 1) => a + b
console.log(defaultParameter(4));

// practice problem 2
const friends = ['rnk', 'ronok', 'ripa', 'jihan', 'lopa', 'prince']
const evenFriends = []
for (const friend of friends) {
    if (friend.length % 2 === 0) evenFriends.push(friend)
}
console.log(evenFriends);

// practice problem 3
const numbers = [1, 2, 3, 4, 5]
const avgOfSumOfSqNumbers = (numbers) => {
    let sqSum = 0
    for (const num of numbers) {
        sqSum += Math.pow(num, 2)
    }
    return sqSum / numbers.length
}
const result = avgOfSumOfSqNumbers(numbers)
console.log(result);

// practice problem 4
const arr1 = [1, 2]
const arr2 = [2, 3]
const joinArrays = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2]
    return Math.max(...newArray)
}
console.log(joinArrays(arr1, arr2));