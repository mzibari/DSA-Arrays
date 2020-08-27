let arr = [4, 6, -3, 5, -2, 1]

function continSum(arr) {
    let largSum = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > largSum) {
            largSum = sum
        }
    }
    console.log(largSum)
}

continSum(arr)