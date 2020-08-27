arr.push(3);

console.log(arr);


arr.pop();
// length will be decreased by one and memory address will also decrease
arr.push("tauhida");
// length will be increased with push() which = 1 and memory address will = 1 also

console.log(arr);


// _resize() will allocate memory if it exists then move the ptr to the start of that memory slot
// then it will copy all the items into the new slot, then it will free the old slot, and finally 
// it will change the capacity to the requested size