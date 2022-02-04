// Write a Function which takes parameter of Food name and Quantity and output Pizza and total price. However, if you input anything but Pizza it'll show an error message. Also, you can't order more than 10 Pizza at a time. Each Pizza costs 10$.

function pizzaPanda(foodName, quantity) {
  if (foodName.toLowerCase() !== "pizza") {
    foodName = foodName.toUpperCase();
    return `Sorry we don't sell ${foodName} and sell Pizza only. You can only 10 Pizzas at a time. `;
  } else if (quantity >= 10) {
    foodName = foodName.toUpperCase();
    return `Sorry we don't sell ${quantity} ${foodName} at a time.`;
  } else if (quantity <= 1) {
    foodName = foodName.toUpperCase();
    return `Please input a valid Number.`;
  }

  foodName = foodName.toUpperCase();
  var price = quantity * 10;
  var message = `Pizza has been ordered Successfully! Order info: ${foodName}, ${price}$`;

  return message;
}

// console.log(pizzaPanda("pizza", 11));




// Write code that add the total element of index of the Array

const array = [34, 23, 9, 45, 39, 62];

let sum = 0;
for(let i = 0; i < array.length; i++){
  const element = array[i];
  sum += element;
}
//  console.log(sum);



//  Write code that takes a sentence as parameter and outputs how many "a" are there in the sentence.

let sentence = "Hello, I am Riyad Hossain. I want to be a Web Application Developer."
let count = 0;

for(let i = 0; i < sentence.length; i++){
  let letter = sentence[i];
  if(letter == "a"){
    count++;
  }
}

// console.log(count);


// Write a function which takes a sectence as parameter and inputs the sentence in reverse order.

let aSectence = "Hello, I am Riyad Hossain";

function revSentence(sentence){
    let revString = "";
    for(let i = sentence.length - 1; i >= 0; i--){
        revString += sentence[i];
    }

    return revString;
}

// console.log(revSentence(aSectence));


// Write a function that takes a sentence as parameter and return the total amount of word in the sentence.   ******

let intro = 'Hi,   I    am    Riyad Hossain.  I want to be a Web Application Developer.';

function countWord(sentence){
  let count = 0;

  for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === ' ' && sentence[i-1] !== ' '){
      count++;
    }
  }
  count++;
  return count;
}
 
// console.log(countWord(intro));



// Write a function which print even Number from 1 to 20. 

function printEven(){
  let even = [];
  for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
      even.push(i);
    }
  }
  return even;
}

// console.log(printEven());


// Write a function that count total number divisible by 3 from 1 - 20. 
 
function countDivisible(){
  let count = 0;
  for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
      count++;
    }
  }
  return count;
}

// console.log(countDivisible());


// Write a function thats counts total vowel which input in the function as aurgument. ********

let iAmRiyad = "Hello, my dear friends. It's Riyad Hossain, a Web Application Developer.";

const vowel = ['a', 'e', 'i', 'o', 'u'];

function countVowel(sentence){
  let count = 0;
  for(let letter of sentence.toLowerCase()){
    if(vowel.includes(letter)){
      // Does letter include in vowel - yes/no
      count++;
    }
  }
  return count;
}

// console.log(countVowel(iAmRiyad));



// Calculate the average of all the numbers that is divisible by 3 from 1 - 20. 

function findAvg(num){

  let count = 0;
  let sum = 0;
  for(let i = 1; i < num; i++){
    if(i % 3 === 0){
      sum += i;
      count++;
    }
  }
  let avg = sum / count;
  
  return avg;
}


// console.log(findAvg(12));