// Write a function that takes an array as parameter and inputs the second largest value of the Array.

// function findSecondLargest(array) {
//   const tempArray = [...array];
//   tempArray.pop(Math.max(...tempArray));
//   return Math.max(...tempArray);
// }

let anArray = [1, 2, 3, 4];



function findSecondLarge(array) {
    
    const tempArray = [...array];
    tempArray.pop()
    let secLarge = Math.max(...tempArray);
    return secLarge;
}

console.log(findSecondLarge(anArray));

// console.log(anArray.pop());

