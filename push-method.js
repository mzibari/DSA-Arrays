function main(){

    Array.SIZE_RATIO = 3;
    // The array will initially have length of 0 and the pointer will be pointing at 0
    
    let arr = new Array();
    // Length = 1, capacity = 3, memory address = 1
    // 
    arr.push(3);

    console.log(arr);



    arr.push(5);
    // Length = 1, capacity = 3, memory address = 1
    arr.push(15);
    // Length = 2, capacity = 3, memory address = 2
    arr.push(19);
    // Length = 3, capacity = 3, memory address = 3
    arr.push(45);
    // Length = 4, capacity = 9, memory address = 4
    arr.push(10);
    // Length = 4, capacity = 9, memory address = 5

    // after each push() the length will increase by 1 and the memory address which is ptr will also increase by 1
    // in push() if the length is >= capacity, the capacity will increase based on the SIZE_RATIO which is 3, meaning it will increase by a factor of 3
}