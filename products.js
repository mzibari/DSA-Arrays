let arr = [1, 3, 9, 4]

function product(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let temp = 1
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                temp *= arr[j]
            }
        }
        newArr.push(temp)

    }
    return newArr
}

console.log(product(arr))

