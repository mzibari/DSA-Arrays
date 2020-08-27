let arr1 = [1, 3, 6, 8, 11]
let arr2 = [2, 3, 5, 8, 9, 10]

function mergeSort(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i])
    }
    for (let j = 0; j < arr2.length; j++) {
        newArr.push(arr2[j])
    }

    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] > newArr[j]) {
                let temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }

    console.log(newArr)
}


mergeSort(arr1, arr2)