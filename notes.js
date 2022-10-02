// ES 20 something

// link

// - https://www.udemy.com/course/the-advanced-web-developer-bootcamp/learn/quiz/371466#content

//#region  Arrow functions

//#endregion

//#region Advanced Array Methods
//#region FOREACH---

/*
forEach ---
[1,2,3].forEach(function(value, index, array){
  --can call params whatever we want
  --do not always need all three parameters
  console.log(value, index, array);
  1, 0, [1,2,3]
  2, 1, [1,2,3]
  3, 2, [1,2,3]
});
write a function called foreach accepts array and a callback function
*/
function ForEach(arr, callback) {
  for (let index = 0; index < arr.length; index++) {
    callback(arr[i], i, arr);
  }
  //returns undefined
}

//write function to divide all values by 2 using foreach
function halfValues(arr) {
  var newArr = [];

  arr.forEach(function (val) {
    newArr.push(val / 2);
  });
  return newArr;
  // halfValues([2,4,6]); // [1,2,3]
}

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
*/

//make new array
//foreach with callback function on passed array values
//push to insert passed array values multiplied by 2 to new array
//return new array
function doubleValues(arr) {
  var newArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]
*/
function onlyEvenValues(arr) {
  var newArr = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/
function showFirstAndLast(arr) {
  var newArr = [];
  arr.forEach((val) => {
    let first = val[0];
    let last = val[val.length - 1];
    newArr.push(first + last);
  });
  return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value 
and returns the array passed to the function with the new key and value added for each object 
Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
    let person = {
      name: 'elle'
    }
    pass (instructor, 'title', 'instructor')
    return 
    
    instructor = {
      name: 'elle',
      title: 'instructor
    }
    var obj = {key1: "value1", key2: "value2"};
    
    Object.assign(obj, {key3: "value3"});
*/
function addKeyAndValue(arr, key, value) {
  arr.forEach((val) => {
    Object.assign(val, { [key]: value });
  });
  return arr;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach((val) => {
    val[key] = value;
  });
  return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an 
object with the keys as the vowel and the values as the number of times 
the vowel appears in the string. This function should be case insensitive 
so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newArr = [];
  let myObj = {};
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    newArr.push(str[i]);
  }

  vowels.forEach((val) => {
    if (newArr.includes(val)) {
      console.log(val);
      counter++;
      Object.assign(myObj, { [val]: [counter] });
      console.log(myObj);
    }
  });
}
function vowelCount2(str) {
  let splitArr = str.split("");
  let vowels = "aeiou";
  let myObj = {};

  splitArr.forEach(function (val) {
    if (vowels.indexOf(val.toLowerCase()) !== -1) {
      if (val in myObj) {
        myObj[val]++;
      } else {
        myObj[val] = 1;
      }
    }
  });
  return myObj;
}
//#endregion
//#region MAP---
/*
map ---
[1,2,3].map(function(value, index, array){
  return value * 2;
});
console.log(value, index, array);
[2,4,6]
function Map(arr, callback){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i], i, array))
  }
  return newArr;
}
function TripleValues(arr){
  return arr.map(function(value){
    return value * 3;
  })
}
function OnlyFirstName(arr){
  return arr.map(function(value){
    return value.first;
  })
}
*/

/*
Write a function called doubleValues which accepts 
an array and returns a new array with all the values 
in the array passed to the function doubled
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

/*
Write a function called valTimesIndex which accepts an 
array and returns a new array with each value multiplied 
by the index it is currently at in the array.
Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/
function Map(arr) {
  return arr.map(function (val) {
    return val * arr.indexOf(val);
  });
}

/*
Write a function called extractKey which accepts an 
array of objects and some key and returns a new array 
with the value of that key in each object.
Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
  return arr.map(function (val) {
    return val[key];
  });
}

/*
Write a function called extractFullName which accepts 
an array of objects and returns a new array with the value 
of the key with a name of "first" and the value of a key 
with the name of  "last" in each object, concatenated together with a space. 
Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) 
                // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
  return arr.map(function (val) {
    return val.first + " " + val.last;
  });
}

//#endregion

//#region FILTER---
/*
filter --- Remove values based on condition
[1,2,3].filter(function(value, index, array){
  return value > 2;
});
[3]
var instructors = [
  {name: 'Tim'}
  {name: 'Matt'}
  {name: 'Colt'}
  {name: 'Elie'}
];
instructors.filter(function(value, index, array){
  return value.name.length > 3;
});
[{name: 'Elie'}, {name: 'Matt'}, {name: 'Colt'}]
// filtered out Tim
how it works
function filter(array, callback){
  var newArr = [];
  for(var i=0; i < array.length; i++){
    if(callback(array[i], i, array)){
      newArr.push(array[i]));
    }
  }
  return newArr;
}
*/

function onlyFourLetters(arr) {
  return arr.filter(function (value) {
    return value.length === 4;
  });
}
onlyFourLetters(["Rusty", "Matt", "Moxie", "Colt"]); //['Matt', 'Colt']

function divisibleByThree(arr) {
  return arr.filter(function (value) {
    return value % 3 === 0;
  });
}
divisibleByThree([1, 2, 3, 4, 5, 6, 7, 8, 9]); //[3,6,9]

/*
Write a function called filterByValue which accepts an array of objects 
and a key and returns a new array with all the objects that contain that key.
Examples:
    filterByValue([
      {first: 'Elie', last:"Schoppik"}, 
      {first: 'Tim', last:"Garcia", isCatOwner: true}, 
      {first: 'Matt', last:"Lane"}, 
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ], 'isCatOwner') 
    // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
  return arr.filter(function (val) {
    return val[key] !== undefined;
  });
}

/*
Write a function called find which accepts an array and a value and 
returns the first element in the array that has the same value as the 
second parameter or undefined if the value is not found in the array.
Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
  return arr.filter(function (val) {
    return val === searchValue;
  })[0];
}

/*
Write a function called findInObj which accepts an array of 
objects, a key, and some value 
to search for and returns the first found value in the arrayt.
Examples:
    findInObj([
      {first: 'Elie', last:"Schoppik"}, 
      {first: 'Tim', last:"Garcia", isCatOwner: true}, 
      {first: 'Matt', last:"Lane"}, 
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ], 'isCatOwner',true) 
    // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
  return arr.filter(function (val) {
    return val[key] === searchValue;
  })[0];
}

/*
Write a function called removeVowels which accepts a string and returns 
a new string with all of the vowels (both uppercased and lowercased) removed. 
Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
  let vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function (val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

/*
Write a function called doubleOddNumbers which accepts an array and 
returns a new array with all of the odd numbers doubled 
(HINT - you can use map and fitler to double and then filter the odd numbers).
Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
  return arr
    .filter(function (val) {
      return val % 2 === 1;
    })
    .map(function (val) {
      return val * 2;
    });
}

//#endregion

//#region SOME/EVERY ---
/*
SOME --- returns true/false on one value  based on condition
[1,2,3].some(function(value, index, array){
  return value < 2;
});
true
function hasEvenNumber(arr){
  return arr.some(function(val){
    return value % 2 === 0;
  });
})
hasEvenNumber([1,2,3,4]) //true
hasEvenNumber([1,3,5]) //false
function hasComma(str){
  return str.split('').some(function(value){
    return value === ',';
  });
})
hasComma('This is wonderful') //false
hasComma('This, is wonderful') //true
EVERY --- returns true/false on one value  based on condition
[-1,-2,-3].every(function(value, index, array){
  return value < 0;
});
true
function allLowerCase(str){
  return str.split('').every(function(val){
    return val === value.toLowerCase();
  })
})
allLowerCase('This is Really Nice') //false
allLowerCase('this is really nice') //true
function allArrays(arr){
  return arr.every(Array.isArray);
}
allArrays([[1], [2], [3,4]]); // true
allArrays([[1], [2], {}]); // false
*/

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.
Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
  return arr.some(function (val) {
    return val % 2 === 1;
  });
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {
  return num
    .toString()
    .split("")
    .some(function (val) {
      return val === "0";
    });
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. 
If any of the values in the array are not odd, the function should return false. 
Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
  return arr.every(function (val) {
    return val % 2 === 1;
  });
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values 
(more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
  return arr.every(function (val) {
    console.log(arr.indexOf(val), arr.lastIndexOf(val), val);
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, 
and returns true if every single object in the array contains that key. Otherwise it should return false.
Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {
  return arr.every(function (val) {
    return val[key];
  });
}
function hasCertainKey(arr, key) {
  return arr.every(function (val) {
    return key in val;
  });
}
/*
Write a function called hasCertainValue which accepts an array of objects, a key, 
and a value, and returns true if every single object in the array contains that value 
for the specific key. Otherwise it should return false.
Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {
  return arr.every(function (val) {
    console.log(searchValue);
    return val[key] === searchValue;
  });
}

//#endregion

//#region Reduce ---

/*
reduce --- accumulation function, able to convert data structure
- accepts callback and optional param
- first callback param is either first element in array or optional second param
- first param refered to as accumulator
- returned value becomes new accumulator
INTEGER REDUCE ----
[1,2,3].reduce(function(accumulator, nextValue, index, array){
}, optional second param taking accumulator value);
[1,2,3,4,5].reduce(function(accumulator, nextValue){
  return accumulator + nextValue
});
accumulator       nextValue       returnedValue
1                 2               3
3                 3               6
6                 4               10
10                5               15
1 + 2 = '3' + 3 = '6' + 4 = '10' + 5 = '15'
[1,   2,      3,        4,         5]
[1,2,3,4,5].reduce(function(accumulator, nextValue){
  return accumulator + nextValue
},10);
accumulator       nextValue       returnedValue
10                1               11
11                2               13
13                3               16
16                4               20
20                5               25
10 + 1 = '11' + 2 = '13' + 3 = '16' + 4 = '20' + 5 = '25'
    [1,         2,        3,         4,         5]
STRING REDUCE ----
['Tim', 'Matt', 'Colt', 'Elie'].reduce(function(accumulator, nextVaue){
  return accumulator += ' ' + nextValue;
}, 'The instructors are');
// 'The instructors are Tim Matt Colt Elie'
accumulator                       nextValue                       returnedValue
'The instructors are'             'Tim'                           'The instructors are Tim'
'The instructors are Tim'         'Matt'                          'The instructors are Tim Matt'
'The instructors are Tim Matt'    'Colt'                          'The instructors are Tim Matt Colt'
'The instructors are Tim Matt Colt''Elie'                         'The instructors are Tim Matt Colt Elie'
Object REDUCE ----
[5,4,1,4,5].reduce(function(accumulator, nextValue){
  if(nextValue in accumulator){
    accumulator[nextvalue]++;
  } else{
    accumulator[nextValue] = 1;
  }
  return accumualtor
}, {});
accumulator       nextValue       returnedValue
{}                5               {5:1}
{5:1}             4               {5:1, 4:1}
{5:1, 4:1}        1               {5:1, 4:1, 1:1}
{5:1, 4:1, 1:1}   4               {5:1, 4:2, 1:1}
function sumOddNumbers(arr){
  return arr.reduce(function(accumulator, nextValue){
    if(nextValue % 2 !== 0){
      accumulator += nextValue;
    }
    return accumulator;
  }, 0);
}
sumOddNumbers([1,2,3,4,5]); //9
function createFullName(arr){
  return arr.reduce(function(accumulator, nextValue){
    accumulator.push(nextValue.first + ' ' + nextValue.last);
    return accumulator;
  }, []); 
}
createFullName([{first: "Colt", last: "Steele"}, {fist: "Matt", last: "Lane"}]) // ["Colt Steele", "Matt Lane"]
*/
/*
Write a function called extractValue which accepts an array of objects and 
a key and returns a new array with the value of each object at the key.
Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
  return arr.reduce(function (acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}

/*
Write a function called vowelCount which accepts a string and returns an object 
with the keys as the vowel and the values as the number of times the vowel appears 
in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
  let vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .reduce(function (acc, next) {
      if (vowels.indexOf(next) !== -1) {
        if (next in acc) {
          acc[next]++;
        } else {
          acc[next] = 1;
        }
      }
      return acc;
    }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of 
objects passed to it with each object now including the key and value passed to the function.
Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

//USING INDEX TO ACCESS EACH VALUE TO ADD KEY
function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, next, i) {
    acc[i][key] = value;
    return acc;
  }, arr);
}

/*
Write a function called partition which accepts an array and a callback and 
returns an array with two arrays inside of it. The partition function should 
run the callback function on each value in the array and if the result of the 
callback function at that specific value is true, the value should be placed in 
the first subarray. If the result of the callback function at that specific value 
is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
  return arr.reduce(
    function (acc, next, i) {
      if (callback(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}

//#endregion

//#region CLOSURES AND KEYWORD THIS
//closures ---
/*
  a closure is a function that makes use of variables defined in 
  outer functions that have previously returned

  -have to return inner function to invoke
  -can either call with seciond () or can store result of function in variable
  -do not have to name inner function
  -only variables used inside inner function are remembered

  function outer(){
    var start = "Closures are"
    return function inner(){
      return start + " " + "awesome"
    }
  }
  outer() //function inner(){return start + " " + "awesome"}
  outer()() // "Closures are awesome"
  has access to start due to closure

  function outer(a){
    return function inner(b){
      the inner function is making use of the variable 'a'
      which was defined in an outer function called 'outer'
      and by the time inner is called, that outer function has 
      returned this function called "inner" is a closure
      return a + b
    }
  }
  outer(5)(5); //10

  var storeOuter = outer(5)
  storeOuter(10);

  inner function tech, variables remembered if returned
  function outerFn(){
    var data = "something from outer";
    var fact = "remember me";
    return function innerFn(){
      debugger // have access to fact variable due to return 
      return fact;
    }
  }



  Using closures in the wild
  - closures create the concept of private variables, 
    variables which should not be modified externally, not built into js

  function counter(){
    var count = 0;
    return function inner(){
      count++
      return count;
    }
  }
  all own private variables
  var counter1 = counter();
  Console.log(counter1) //function definition
  counter1(); //1
  counter1(); //2

  var coutner2 = counter();
  coutner2(); //1



  function classRoom(){
    var instructors = ["Ellie", "Colt"];
    return { //object with method
      getInstructors: function(){
        return instructors;
      },
      addInstructor: function(instructor){
        instructors.push(instructor);
        return instructors;
      }
    }
  }
  var first = classRoom();
  first.getInstructors(); //["Ellie", "Colt"]
  first.addInstructor("Matt"); //["Ellie", "Colt", "Matt"]
  first.addInstructor("Tim"); //["Ellie", "Colt", "Matt", "Tim"]

  var second = classRoom();
  first.getInstructors(); //["Ellie", "Colt"] (not first instructors)

  first.getInstructors().pop() //["Ellie"] (not good, modifying original variable)
  should return shallow copy of array

  function classRoom(){
    var instructors = ["Ellie", "Colt"];
    return { //object with method
      getInstructors: function(){
        return instructors.slice();
      },
      addInstructor: function(instructor){
        instructors.push(instructor);
        return instructors.slice();
      }
    }
  }
*/
/* 
Write a function called specialMultiply which accepts two parameters. 
If the function is passed both parameters, it should return the product of the two. 
If the function is only passed one parameter - it should return a function which can 
later be passed another parameter to return the product. You will have to use closure 
and arguments to solve this.

Examples: 
    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a, b) {
  if (arguments.length === 1) {
    return function (b) {
      return a * b;
    };
  }
  return a * b;
}

/* 
Write a function called guessingGame which takes in one parameter amount. 
The function should return another function that takes in a parameter called guess. 
In the outer function, you should create a variable called answer which is the result 
of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number 
(defined in the outer function) - you should return the string "You got it!". 
If the guess is too high return "Your guess is too high!" and if it is too low, 
return "Your guess is too low!". You should stop the user from guessing if the 
amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/

function guessingGame(amount) {
  var guesses = 0;
  var answer = Math.floor(Math.random() * 11);
  return function (val) {
    guesses++;
    console.log(val, guesses);
    console.log(answer);
    if (val === answer) {
      return "You got it!";
    } else if (val < answer) {
      return "Your guess is too low!";
    } else if (val > answer) {
      return "Your guess is too high!";
    } else if (val > guesses) {
      return "too many guesses";
    }
  };
}
/*
//recap

-closure exists when an inner functions makes use of 
variables declared in an outer function which has previously returned

-closure does not exist if you do not return an inner function and if that inner
function does not make use of vairables returned by an outer function

-Javascript will only remember values thatare being used inside of the inner function, 
not all variabes defined in the outer function

-we can use clousres to create private variables and 
write better code that isolate out loguic and application




//keyword 'this'

-a reserved keyword in javascript
-usually determied by how a function is called
-can be determined using four rules (global, object/implicit, explicit, new)

-Global context / not inside delcared object
function whatIsThis(){
  return this //returns window
}
function variablesInThis(){
  this.person = "Ellie";
}
variablesInThis(); //keyword this inside function is window
console.log(person) //Ellie


-Implicit/Object binding
-when keyword 'this' is inside of a declared object an function is run
//strict mode does not make a difference here
var person = {
  firstName: "Ellie",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  determineContext: function(){
    return this === person;
  }
}
person.sayHi(); //"Hi Ellie"
person.determineContext(); //true

Implicit Binding
-the value of this will alwasy be closest parent object
var person = {
  firstName: "Ellie",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  determineContext: function(){
    return this === person;
  },
  dog: {
        sayHello: function(){
          return "Hi " + this.firstName;
        },
        determineContext: function(){
          return this === person; //keyword this does not refer to person object(dog object)
        }
  }
}
person.dog.sayHello(); //"Hello undefined" (dog.firstname)
person.dog.determineContext(); //false

IF we want this value changed - call, apply, bind functions

Explicit Binding
-choose what we want the contet of 'this' to be using call, apply, or bind
-can only by used by functions

Call
- takes unlimited params, will set 'this', second param is any params used by function
Apply 
- only takes 2 params, params are what we want this to be, second param is array of arguments passed whch we change this to
Bind
-returns function definition with val of this set by param


Method       Params(thisValue)    Invoke Immediately?
Call         thisArg,a,b,c,d      Yes
Apply        thisArg,[a,b,c,d]    Yes
Bind         thisArg,a,b,c,d      No

-Call, Apply, Bind are 3 methods used to explicitly set the value of 'this'
-We use them when we want full controll over value keyword 'this'
-Call and apply will return immedialtely
-Bind returns new function definition with keyword this set
-Call and bind accept unlimited params, apply only 2

Fixing with Call Method
person.dog.sayHello(); //"Hello undefined" (dog.firstname)
person.dog.determineContext(); //false

person.dog.sayHello.call(person); //"Hello Colt" (person.firstname defined)
person.dog.determineContext.call(person); //true
-notice how we do not actually invoke sayHello or determineContext

Using Call in the wild
-to avoid code duplication

//duplicate sayhi function
var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}
var ellie = {
  firstName: "Ellie",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}
colt.sayHi(); //Hi Colt
ellie.sayHi(); //Hi Ellie (colde ducplicated from Colt object...)

Refactor using call (borrow the sayHi function from colt and set value to ellie)

var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}
var ellie = {
  firstName: "Ellie"
}
colt.sayHi(); //Hi Colt
colt.sayHi.call(ellie); //Hi Ellie (call function setting 'this' to ellie object)


One step further
-a sayHi function that anyone can use
function sayHi(){
  return "Hi " + this.firstName;
}
var colt = {
  firstName: "Colt"
}
var ellie = {
  firstName: "Ellie"
}
sayHi.call(colt); //Hi Colt (passed obj as 'this')
sayHi.call(ellie); //Hi Ellie

One function for many use cases - awesome

Another use case
-select all divs on page
var divs = document.getElementsByTagName('div'); //returns list of divs
-select all divs on page containing text "Hello"
-divs is not an array, it is an array like object, divs.filter will not work
-convert arraylike to array using slice

-use slice method on arrays with call, set the target of 'this' 
to be our divs array like object

var divsArray = [].sice.call(divs);
//also may also see as Array.prototype.slice.call(divs)

divsArray.filter(function(val){
  return val.innerText === 'Hello';
});
//slicing something that is not actually an array
//slice will not work on all datatypes but works well with array-like-objects



Apply
function sayHi(){
  return "Hi " + this.firstName;
}
var colt = {
  firstName: "Colt"
}
var ellie = {
  firstName: "Ellie"
}
sayHi.call(colt); //Hi Colt
sayHi.apply(ellie); //Hi Ellie (seems the same, but what about arguments)


function addNumbers(a,b,c,d){
  return this.firstName + " just calculated " + (a,b,c,d);
}
var colt = {
  firstName: "Colt"
}
var ellie = {
  firstName: "Ellie"
}
addNumbers.call(ellie,1,2,3,4) //Ellie just calculated 10
addNumbers.apply(ellie,[1,2,3,4]) //Ellie just calculated 10

When to use apply
-when a function does not accept an array, 
apply will spread out values in an array for us

var nums = [5,7,1,4,2];
Math.max(nums); //NaN
Math.max.apply(this, nums); //7

function sumValues(a,b,c){
  return a+b+c;
}
var values = [4,1,2]
sumValues(values); //"4,1,2undefinedundefined"
sumValues.apply(this,[4,1,2]); //7



Bind
-the parameters work like call, but bind returns a function with the 
context of 'this' bound already

function addNumbers(a,b,c,d){
  return this.firstName + " just calculated " + (a,b,c,d);
}
var ellie = {
  firstName: "Ellie"
}
var ellieCalc = adNumbers.bind(ellie, 1,2,3,4); // function(){}
ellieCalc(); //Ellie just calculated 10

Partial Application
//with bind - we do not need to know all the arguments up front
var ellieCalc = adNumbers.bind(ellie, 1,2); // function(){}
ellieCalc(3,4); //Ellie just calculated 10

Bind in the Wild
-very commonly we lose the context of 'this', but in functions that we do 
not want to execute right away

var colt = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.firstName);
    }, 1000)
  }
}
colt.sayHi(); //Hi undefined (setTimeout get own callback function renewing 'this')

Call/Apply trigger immediately, use Bind

var colt = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.firstName);
    }.bind(this), 1000)
  }
}
colt.sayHi(); //Hi Colt


*/
/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject) {
  return [].slice.call(arrayLikeObject);
}

/* 
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments() {
  var newArgs = [].slice.call(arguments);
  return newArgs.reduce(function (acc, next, i) {
    console.log(i);
    if (next % 2 === 0) {
      return acc + next;
    } else {
      return acc;
    }
  }, 0);
}

/* 
Write a function called invokeMax which accepts a function and a maximum amount. 
invokeMax should return a function that when called increments a counter. 
If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, num) {}

/* 
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined
    
    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }
    
    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined
    

*/

function once(fn, thisArg) {}

// BONUSES!

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"
    
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue" 
    
    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg) {}

/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure! 

Flip should return a new function that when invoked takes the correct number of required arguments to that function which are then reversed. HINT - you will need to use the .length property on functions to figure out the correct amount of arguments. For example:

flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) 




Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"
    
    function subtractFourNumbers(a,b,c,d){
        return a-b-c-d;
    }

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/

function flip(fn, thisArg) {}

//#endregion

//#region Arrow Functions

var add = function (a, b) {
  return a + b;
};

//fuction can be re written as
var add = (a, b) => a + b;

var add = function (a, b) {
  return a + b;
};

//fuction can be re written as
var add = (a, b) => a + b;

//Refactoring with arrow functions
//Map from
[1, 2, 3].map(function (value) {
  return value * 2;
}); //[2,4,6]
//to
[1, 2, 3].map((value) => value * 2); //[2,4,6]

//Double and filter refactor
//from
function doubleAndFilter(arr) {
  return arr
    .map(function (value) {
      return value * 2;
    })
    .filter(function (value) {
      return value % 3 === 0;
    });
}
//to
var doubleAndFilter = (arr) =>
  arr.map((val) => val * 2).filter((num) => num % 3 === 0);
//with a single parameter, no paranthesis needed

/*

-Arrow functions are not exactly the same as regurlar functions
-arrow functions do not get their own keyword 'this'
-inside an arrow functiuon the keyword this has its original meaning 
  from the enclosing context
-the fact tha arrow functions do not have their own this keyword can be quite helpful - 
  you just need to understand when you might not want that

*/
//remember bind is needed(dont invoke immediately with settimeout)
//otherwise undefined
var instructor = {
  firstName: "Ellie",
  sayHi: function () {
    setTimeout(
      function () {
        console.log("hello" + this.firstName);
      }.bind(this),
      1000
    );
  },
};
//arrow funcrtions as an alternative
//encolsing context becomes instructor object
//with use of arrow functions, becuase the arrow fucntion does not have its own 'this', one spcae up
var instructor = {
  firstName: "Ellie",
  sayHI: function () {
    setTimeout(() => {
      console.log("hello" + this.firstName);
    }, 1000);
  },
};
//both arrow function and arrow function
//function provides 'this' -> instructor
//another arrow fucntion means window ->another space up

/*
-Arrow functions do not get own keyword arguments as well
-Can however be accesed through closure
*/
function outer() {
  return (innerFunction = () => {
    return arguments;
  });
}
outer(1)(2); //only prints outter functions arguments [1];

//When NOT to use arrow fucntions
/*
-Arrow functions should never be used as methods in object 
 since we will get the incorrect value of the keyword this
-ES2015 provides a better alternative
*/
//a value we dont want (window)
var instructor = {
  firstName: "Ellie",
  sayHi: () => `Hello ${this.firstName}`,
};
instructor.sayHi(); //"hello undefined"

//assignment
/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter
    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }
*/
var tripleAndFilter = (arr) =>
  arr.map((val) => val * 3).filter((val) => val % 5 === 0);

/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers
    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }
*/
var doubleOddNumbers = (arr) =>
  arr.filter((val) => val % 2 !== 0).map((val) => val * 2);

/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.
    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

var mapFilterAndReduce = (arr) =>
  arr
    .map((val) => val.firstName)
    .filter((val) => val.length < 5)
    .reduce((acc, next) => {
      acc[next] = next.length;
      return acc;
    }, {});

var mapFilterAndReduce = (arr) =>
  arr
    .map((value) => value.firstName)
    .filter((value) => value.length < 5)

    .reduce((acc, next) => {
      acc[next] = next.length;
      return acc;
    }, {});

/* 4 - Write a function called createStudentObj which accepts two parameters, 
firstName and lastName and returns an object with the keys of firstName and lastName
with the values as the parameters passed to the function.
Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

/* 5 - Given the following code: 
Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
    
    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }
*/

//#endregion

//#region REST AND SPREAD
/* 
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.
Examples:
    smallestValue(4,1,12,0) // 0
    smallestValue(5,4,1,121) // 1
    smallestValue(4,2) // 2
    smallestValue(99,12321,12.2) // 2
*/

function smallestValue(...val) {
  return Math.min(...val);
}

/* 
Write a function called placeInMiddle which accepts two parameters, an array and another array. 
This function should return the first array with all of the values in the second array placed in the middle of the first array.
Examples:
  placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
  placeInMiddle([1],[3,4,5]) // [3,4,5,1]
  placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
  placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/

function placeInMiddle(arr, values) {
  let middle = Math.floor(arr.length / 2);
  arr.splice(middle, 0, ...values);
  return arr;
}

/* 
Write a function called joinArrays which accepts a variable number of parameters 
(you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together
Examples:
  
  joinArrays([1],[2],[3]) // [1,2,3]
  joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
  joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
  joinArrays([1],[3],[0],[7]) // [1,3,0,7]
*/
function joinArrays(...vals) {
  return vals.concat(...vals);
}
function joinArrays(...vals) {
  return vals.reduce((acc, next) => acc.concat(next), []);
}

/* 
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.
Examples:
  sumEvenArgs(1,2,3,4) // 6
  sumEvenArgs(1,2,6) // 8
  sumEvenArgs(1,2) // 2
*/

function sumEvenArgs(...vals) {
  if (vals % 2 === 0) {
    return vals + vals;
  }
  vals % 2 === 0 ? vals + vals : vals;

  return vals.reduce((acc, next) => (next % 2 === 0 ? (acc += next) : acc), 0);
}

/* 
Write a function called flip which accepts a function and a value for the keyword this. 
Flip should return a new function that when invoked, will invoke the function passed to 
flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED. 
HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to 
the inner function when it is invoked. You will have to make use of closure!
Examples:
  function personSubtract(a,b,c){
      return this.firstName + " subtracts " + (a-b-c);
  }
  
  var person = {
      firstName: 'Elie'
  }
  
  var flipFn = flip(personSubtract, person);
  flipFn(3,2,1) // "Elie subtracts -4"
  
  var flipFn2 = flip(personSubtract, person, 5,6);
  flipFn2(7,8). // "Elie subtracts -4"
  flip(subtractFourNumbers,this,1)(2,3,4) // -2
  flip(subtractFourNumbers,this,1,2)(3,4) // -2
  flip(subtractFourNumbers,this,1,2,3)(4) // -2
  flip(subtractFourNumbers,this,1,2,3,4)() // -2
  flip(subtractFourNumbers,this)(1,2,3,4) // -2
  flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
  flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
  flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22
*/

function flip(fn, thisArg, ...outerArgs) {
  return function (...innerArgs) {
    let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
    return fn.apply(thisArg, allArgs.reverse());
  };
}

/* 
Write a function called bind which accepts a function 
and a value for the keyword this. Bind should return a 
new function that when invoked, will invoke the function 
passed to bind with the correct value of the keyword this. 
HINT - if you pass more than two parameters to bind, those parameters 
should be included as parameters to the inner function when it is invoked. You will have to make use of closure!
Examples:
  function firstNameFavoriteColor(favoriteColor){
      return this.firstName + "'s favorite color is " + favoriteColor
  }
  
  var person = {
      firstName: 'Elie'
  }
  
  var bindFn = bind(firstNameFavoriteColor, person);
  bindFn('green') // "Elie's favorite color is green"
  
  var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
  bindFn2('green') // "Elie's favorite color is blue" 
  
  function addFourNumbers(a,b,c,d){
      return a+b+c+d;
  }
  bind(addFourNumbers,this,1)(2,3,4) // 10
  bind(addFourNumbers,this,1,2)(3,4) // 10
  bind(addFourNumbers,this,1,2,3)(4) // 10
  bind(addFourNumbers,this,1,2,3,4)() // 10
  bind(addFourNumbers,this)(1,2,3,4) // 10
  bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10
  */

function bind(fn, thisArg, ...outerArgs) {
  return function (...innerArgs) {
    return fn.apply(thisArg, [...outerArgs, ...innerArgs]);
  };
}

//#endregion

//#region OBJECT ENHANCEMENTS
/* 
Object Shorthand Notation

var firstName = "Ellie";
var lastName = "Schopik"

//ES5
var instructor = {
  firstName: firstName,
  lastName: lastName
}
//ES2015 can refactor if keys and values have same name
var instructor = {
  firstName,
  lastName
}

Object Methods
var instructor = {
  sayHello: function(){
    return "hello";
  }
}
//ES2015 refactor
var instructor = {
  sayHello(){
    return "hello";
  }
}

Computed Property Names
//ES5
var firstName = "Ellie";
var instructor = {};
instructor[firstName] = "Thats me";
instructor.Ellie // "Thats me"

//ES2015 set value while declaring the object
var firstName = "Ellie";
var instructor = {
  [firstName]: "Thats me"
}
instructor.Ellie //"Thats me"
*/

//#region DESTRUCTURING
/* 
Extracting values from data stored in objects and arrays
//ES5
var instructor = {
  firstName: "Ellie",
  lastName: "Schopik"
}
var firstName = instructor.firstName;
var lastName = instructor.lastName;

//vairable assinged to extracted object value

firstName; //"Ellie"
lastName; //"Schopik"

//ES2015
var isntructor = {
  firstName: "Ellie",
  lastName: "Schopik"
}
//two vairables created from keynames of instructor object
var {firstName, lastName} = instructor;
firstName; //"Ellie"
lastName; //"Schopik"

//different variable names???
var {firstName: first, lastName: last} = instructor;
first; //"Ellie"
last; //"Schopik"

//ES5 Default Values with an object
function createInstructor(options){
  var options = options || {};
  var name = options.name || {first: "Matt", last: "Lane"}
  var isHilarious = options.isHilarious || false;
  return [name.first, name.last, isHilarious];
}
//lost of work!
crearteInstructor(); //["Matt", "Lane", false]
crearteInstructor({isHilarious:true}); //["Matt", "Lane", true]
crearteInstructor({name:{first:"Tim",last:"Garcia}); //["Tim", "Garcia", false]

ES2015 Destructuring
function createInstructor({name = {first: "Matt", last: "Lane"}, isHilarious=false} = {}){
  return [name.first, name.last, isHilarious]
}

Object fields as parameters 
//ES5
function displayInfo(obj){
  return [obj.name, obj.favColor];
}
var instructor = {
  name: "Ellie",
  favColor: "Purple"
};
displayInfo(); //["Ellie", "Purple"]

//ES2015
function displayInfo({name, favColor}){
  return [name, favColor];
}
var instructor = {
  name: "Ellie",
  favColor: "Purple"
};
displayInfo(instructor)

Array Destructuring
ES5 vs ES2015
var arr = [1,2,3];
var a  = arr[0];
var b  = arr[1];
var c  = arr[2];
a; //1
b; //2
c; //3

ES2015
var arr = [1,2,3];
//brackets left side of equals
var [a,b,c] = arr;
a; //1
b; //2
c; //3

function returnNumbers(a,b){
  return [a,b];
}
var first = returnNumbers(5,10)[0];
var second = returnNumbers(5,10)[1];
first; //5
second; //10

//sets both variables on one line
[first, second] = returnNumbers(5,10);
first; //5
second; //10

Swapping values
//ES5
function swap(a,b){
  var temp = a;
  a = b;
  b = temp;
  return [a,b];
}
swap(10,5); // [5,10]

//ES2015
function swap(a,b){
  return[a,b] = [b,a];
}
swap(10,5); // [5,10]

*/
/* 
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')
*/

function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

/* 
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function. 

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
*/

// you will have to pass in the correct parameters for this function!
function printFullName({ firstName, lastName }) {
  return `Your full name is ${firstName} ${lastName}`;
}

/* 
Write a function called createStudent which accepts as a parameter, 
a default parameter which is a destructured object with the key of likesES2015 and value of true, 
and key of likesJavaScript and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function 
    should return the string 'The student likes JavaScript and ES2015'. 

    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'

    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'

    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    createStudent({likesES2015:false}) // 'The student likes JavaScript!')
    createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
    createStudent({likesJavaScript:false, likesES2015:false}) // 'The student does not like much...')
*/

// you will have to pass in the correct parameters for this function!
function createStudent({ likesES2015 = true, likesJavaScript = true } = {}) {
  var answer = "The student";
  if (likesJavaScript && likesES2015) {
    return (answer += " likes JavaScript and ES2015");
  }
  if (!likesJavaScript && !likesES2015) {
    return (answer += " does not like much...");
  }
  if (!likesES2015) {
    return (answer += " likes JavaScript");
  }
  if (!likesJavaScript) {
    return (answer += " likes likes ES2015");
  }
}
/* 
Write a function called reverseArray which accepts an array and 
returns the array with all values reversed. See if you can do this without creating a new array!

Examples:
    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
    reverseArray([1,2]) // [2,1]
    reverseArray([]) // []
    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1
*/

function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

//#region Guess the Password Refactor
/* 

*/
document.addEventListener("DOMContentLoaded", () => {
  const wordCount = 10;
  const guessCount = 4;
  const password = "";

  const start = document.getElementById("start");
  start.addEventListener("click", () => {
    toggleClasses(document.getElementById("start-screen"), "hide", "show");
    toggleClasses(document.getElementById("game-screen"), "hide", "show");
    startGame();
  });

  const toggleClasses = (element, ...classNames) => {
    classNames.forEach((name) => element.classList.toggle(name));
    // for (var i = 1; i < arguments.length; i++) {
    //   element.classList.toggle(arguments[i]);
    // }
  };

  const startGame = () => {
    // get random words and append them to the DOM
    let wordList = document.getElementById("word-list");
    let randomWords = getRandomValues(words);
    randomWords.forEach((word) => {
      let li = document.createElement("li");
      li.innerText = word;
      wordList.appendChild(li);
    });

    // set a secret password and the guess count display
    password = getRandomValues(randomWords, 1)[0];
    setGuessCount(guessCount);

    // add update listener for clicking on a word
    wordList.addEventListener("click", updateGame);
  };

  // const getRandomValues = (array, numberOfVals) => {
  //   return shuffle(array).slice(0, numberOfVals);
  // };
  let getRandomValues = (array, numVals = wordCount) =>
    shuffle(array).slice(0, numVals);

  const shuffle = (array) => {
    let arrayCopy = array.slice();
    for (let idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      // generate a random index between 0 and idx1 (inclusive)
      let idx2 = Math.floor(Math.random() * (idx1 + 1));

      // swap elements at idx1 and idx2
      // let temp = arrayCopy[idx1];
      // arrayCopy[idx1] = arrayCopy[idx2];
      // arrayCopy[idx2] = temp;

      [arrayCopy[idx1], arrayCopy[idx2]] = [arrayCopy[idx2], arrayCopy[idx1]];
    }

    return arrayCopy;
  };

  const setGuessCount = (newCount) => {
    guessCount = newCount;
    document.getElementById(
      "guesses-remaining"
    ).innerText = `Guesses remaining: ${guessCount}.`;
  };

  const updateGame = (e) => {
    if (e.target.tagName === "LI" && !e.target.classList.contains("disabled")) {
      // grab guessed word, check it against password, update view
      let guess = e.target.innerText;
      let similarityScore = compareWords(guess, password);
      e.target.classList.add("disabled");
      e.target.innerText = `${e.target.innerText} --> Matching Letters: similarityScore`;
      setGuessCount(guessCount - 1);

      // check whether the game is over
      if (similarityScore === password.length) {
        toggleClasses(document.getElementById("winner"), "hide", "show");
        this.removeEventListener("click", updateGame);
      } else if (guessCount === 0) {
        toggleClasses(document.getElementById("loser"), "hide", "show");
        this.removeEventListener("click", updateGame);
      }
    }
  };

  const compareWords = (word1, word2) => {
    if (word1.length !== word2.length) throw "Words must have the same length";
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) count++;
    }
    return count;
  };
});

//#endregion

//#region ES2015 Class Methods
/*
Class
- a reserved keyword in JS, a constant which cnannot be redeclared
- an abstraction of constructor functions and prototypes.
  Javascrtipt does not have built in support for object oriented programming
- the class keywrod does not hoist
- still use 'new'


function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
var ellie = new Student('Ellie', 'Schopoik');

ES2015 refactor
class Student{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
var ellie = new Student('Ellie', 'Schopoik');


-Use the class keyword instead of creating a function
-inside, use a speccial method constructor which is run when new is used
-use the new keyword to create objects
-constructor is run when new is used

Instance Methods
-add methods to be sued by every object created from the class

function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
Student.prototype.sayHello = function(){
  return "Hello " + this.firstName + " " + this.lastName
}

ES2015 refactor
class Student{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}
-placed inside of class keyword
-no 'fucntion' keyword - similar to objecy shorthand notation
-under the hood its palcing methods on the prototype object

ES2015 Static methods
class Student{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
  static isStudent(obj){
    return obj.constructor === Student;
  }
}
var student = new Student('E','S');
Student.isStudent(student) // true
Student.isStudent([]) // false


1 - Create a class for a Person. Each person should have a 
firstName, lastName, favoriteColor, favoriteNumber.

2 - Add an instance method called multiplyFavoriteNumber 
that accepts one parameter and returns the product of the 
parameter multiplied with the favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/
class Person {
  constructor(firstName, lastName, favouriteColor, favouriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favouriteColor = favouriteColor;
    this.favoriteNumber = favouriteNumber;
  }
  multiplyFavouriteNumber(val) {
    return val * this.favouriteNumber;
  }
}

/*
Inheritance
-passing along methods and properties from one class to another

ES5
-Would like say hello method accessible by student constructor


function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.sayHello = function(){
  return "Hello " + this.firstName + " " + this.lastName
}
function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.cosntructor = Student

-set prototype of one fucntion to 
be a new object with dunder proto property of another contructor functions prototype
-Reset the constructor property on a constructor function

ES2015 Inheritance
-use keyword 'extends'

class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}
Class Student extends Person{
  //has sayhello function
}
*/

/*
Super

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.sayHello = function(){
  return "Hello " + this.firstName + " " + this.lastName
}
function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
-code works, but lots of duplication
-borrow code from person function to use in student

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.sayHello = function(){
  return "Hello " + this.firstName + " " + this.lastName
}
function Student(firstName, lastName){
  Person.apply(this, arguments)
}

ES2015 refactor
-super finds method by same name in parent class to pass to child class
-super can only be used if a method by same name is implemented in the parent class

class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}
class Student extends Person{
  constructor(firstName, lastName){
    //must use Super
    super(firstName, lastName);
  }
}

// 1 - Create a class for for a Vehicle. 
Each vehicle should have a make, model and year property.

// 2 - Add an instance method called start 
which returns the string "VROOM!"

// 3 - Add an instance method called toString which 
returns the string "The make, model, and year are" 
concatenated with the make, model and year property

 Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'

// 4 - Create a class for a Car. Each object created from 
the Car function should also have a make, model, and year 
and a property called numWheels which should be 4. The Car 
prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created 
from the Motorcycle function should also have a make, model, 
and year and a property called numWheels which should be 2. 
The Motorcycle prototype should inherit all of the methods from the Vehicle prototype
*/

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    return "VROOM!";
  }
  toString() {
    return `The make, model, and year are ${this.make}, ${this.model}, ${this.year}.`;
  }
}
class Car extends Vehicle {
  constructor() {
    // super(make, model, year);
    super(...arguments);
    this.numWheels = 4;
  }
}
class Motorcycle extends Vehicle {
  constructor() {
    // super(make, model, year);
    super(...arguments);
    this.numWheels = 2;
  }
}

/*
RECAP
-quickly create constructor fucntions and prototype methods using the class keyword
-add class methods using the static keyword
-implement inheritance using the extends and super keywords
-ES2015 class syntax is an abstraction of using funcituons and objects
*/

/*
MAPS
-also called hash maps in other languages
-until ES2015 - objects were replacements for maps
-similar to objects, except the kyes can be any data type
-created using new keyword

var firstMap = new Map;
firstMap.set(1, 'Ellie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice');
firstMap.size // 2

var arrayKey = [];
firstMap.set(arrayKey, [1,2,3,4,5]);

var objectKey = {};
firstMap.set(objectKey, {a:1});

Extracting values
firstMap.get(1) // 'Ellie'
firstMap.get(false) // 'a boolean'
firstMap.get(arrayKey) // [1,2,3,4,5]
firstMap.get(objectKey) // {a:1}

firstMap.foreach(v => console.log(v));
//Ellie
//a boolean
//[1,2,3,4,5]
//{a:1}

Maps implement a Symbol.iterator meaning we can use a for loop

firstMap.values(); //MapIterator of values
firstMap.keys(); //MapIterator of keys

Why use Maps?
-finding the size is easy, maps have a size property - no more loops or Object.keys()
-the keys can be any data type
-you can accidentally overwrite keys on the object.prototype in an object you make - maps do not have that issue
-iterating over keys and values in a map is quite easy as well

When to use a map
-if you need to look up keys dynamically (they are not hard coded strings)
-if you need keys that are not strings
-if you are frequently adding and removing key/value pairs
-are key-value pairs frequently added or removed?
-if you are operating on multiple keys at a time

WeakMap
-similar to map, but all keys must be objects
-values in a weakmap can be clearwed from memory if there is no reference to them
-more performant than maps, but can not be iterated over

SETS
-a data structure 
-where all values are unique
-any type of value can exist in a set
-created using the new keyword
-exist in a few other languages, ES2015 brings them to js

var s = new Set;
//can also be created from array
var s2 = new Set([1,2,3,4,5]); //{3,1,4,2,5}

s.add(10); //{10}
s.add(20); //{20, 10}
s.add(10); //{10}
s.size; //2

s.has(10); //true
s.delete(20); //true
s.size; //1

s2[Symbol.iterator]; //function(){}...
//we can use a for...of loop

WeakSet
-similar to set, but all values must be objects
-values in a weakset can be cleared from memory if there is no reference to them
-more performatn than sets but can not be iterated over
*/

class MessageBoard {
  /*
  In your constructor method, 
  you should assign two properties for each object created 
  from the MessageBoard class. The first should be a property 
  called messages which is an empty Map, and the second is a property 
  called id which has a value of 1. 
  
  var m = new MessageBoard
  
  m.hasOwnProperty('messages') // true
  m.messages.constructor // function Map() { [native code] }
  m.hasOwnProperty('id') // true
  m.id // 1
  */

  constructor(messages, id) {
    this.messages = new Map();
    this.id = 1;
  }

  /*
  
  Add a method called addMessage which accepts a string. 
  The function should add a key and value to the messages 
  map with a key of whatever the value of this.id is 
  and a value of whatever the string is that is passed to the function. 
  The function should return the object created from the class so 
  that the method can be chained. (HINT - to implement the last part, 
  make sure to return this).
  
  var m = new MessageBoard
  m.addMessage('hello');
  m.messages.size // 1
  m.addMessage('awesome!') // m
  m.addMessage('awesome!').addMessage('nice!').addMessage('cool!') 
  */

  addMessage(msg) {
    this.messages.set(this.id, msg);
    this.id++;
    return this;
  }

  /*
  Add a method called findMessageById which accepts a 
  number and returns the message in the messages map 
  with the same key as the number passed to the function. 
  If the key is not found in the messages map, the function should return undefined.
  
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.findMessageById(1) // 'hello!'
  m.findMessageById(2) // 'hi!'
  m.findMessageById(3) // 'whats up?'
  m.findMessageById(4) // undefined
  m.findMessageById() // undefined
  */

  findMessageById(val) {
    return this.messages.get(val);
  }

  /*
  Add a method called findMessageByValue which accepts a string and 
  returns the message in the messages map with the same value as the 
  string passed to the function. If the value is not found in the 
  messages map, the function should return undefined.
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.findMessageByValue('hello!') // 'hello!'
  m.findMessageByValue('hi!') // 'hi!'
  m.findMessageByValue('whats up?') // 'whats up?'
  m.findMessageByValue('nothing here') // undefined
  m.findMessageByValue() // undefined
  */

  findMessageByValue(val) {
    for (let msg of this.messages.values()) {
      if (msg === val) {
        return msg;
      }
    }
  }

  /*
  Add a method called removeMessage which accepts a number and 
  removes a message in the messages map with a key of the 
  number passed to the function.
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.removeMessage(1)
  m.removeMessage(2)
  m.messages.size // 1
  m.removeMessage() // m
  */

  removeMessage(id) {
    this.messages.delete(id);
    return this;
  }

  /*
  Add a method called numberOfMessages which returns the 
  number of keys in the messages map
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.numberOfMessages() // 3
  */

  numberOfMessages() {
    return this.messages.size;
  }

  /*
  Add a method called messagesToArray which returns 
  an array of all of the values in the messages map
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
  */

  messagesToArray() {
    //   myArray = [];
    //   for(let msg of this.messages){
    //     myArray.push(msg);
    //   }
    //   return myArray;
    // }
    return Array.from(this.messages.values());
  }
}

/*
Write a function called uniqueValues which accepts an 
array and returns the number of unique values in the array

uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6
*/

function uniqueValues(arr) {
  let unique = [...new Set(arr)];
  return unique;
}

/*

Write a function called hasDuplicates which accepts an 
array and returns true if there are duplicate values in the array, 
otherwise it should return false.

hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // true
hasDuplicates([1,2,3,4,5,6]) // false
hasDuplicates([]) // false
*/

function hasDuplicates(arr) {
  //copy of array as set, will add all values that are unique 
  //and then comapre to oringinal size, if different, non unique values
  console.log(new Set(arr));
  return (new Set(arr)).size !== arr.length;
}

/*

Write a function called countPairs which accepts an array 
of numbers and a number. The function should return the number 
of unique pairs (two numbers) that sum up to the number passed to the function.

countPairs([8,2,6,4,10,0],10) // 3
countPairs([8,2],10) // 1
countPairs([1,2],10) // 0
countPairs([1,2,3,4,5],10) // 0
countPairs([],10) // 0
countPairs([5,4,-10,6,-20,16],-4) // 2
countPairs([0,-4],-4) // 1
*/

function countPairs(arr, num) {
  let set = new Set(arr);
  let count = 0;
  for (let i = 0; i < set.length; i++) {
    if (set[i] + num) {
      
    }
  }
  for(let val of set){
    if (val + num === num) {
      count++;
    }
  }
  return count;
}

//#endregion
