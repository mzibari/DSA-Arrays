let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 14, 16]

console.log(`array before ${arr}`)

function filterArray(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

arr = filterArray(arr)
console.log(`array after ${arr}`)