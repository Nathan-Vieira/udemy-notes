// ES 20 something

// link

// - https://www.udemy.com/course/the-advanced-web-developer-bootcamp/learn/quiz/371466#content

//#region  Arrow functions

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

//arrow functions do not get own keyword this, THIS refers to this directly outside of arrow function
//before without arrow functions, bind was needed
var instructor = {
  firstname: "nate",
  sayHI: function () {
    setTimeout(
      function () {
        console.log("hello " + this.firstname);
      }.bind(this),
      1000
    );
  },
};

//refactorred with arrow function, parent function needed for this reference
var instructor = {
  firstname: "nate",
  sayHI: function () {
    setTimeout(() => {
      console.log("hello " + this.firstname);
    }, 1000);
  },
};
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
  let count = {};
  return str
    .toLowerCase()
    .split("")
    .reduce(function (acc, next) {
      if (vowels.indexOf(next) === 1) {
        acc.push(vowels[next])
      }
      console.log(vowels.indexOf(next));
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

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function(acc, next){
    
    console.log(next);
    return acc;
  });
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
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

function partition(arr, callback) {}

//#endregion

//#region Arrow Functions Refactor from Non Arrow
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

let tripleAndFilter = (arr) =>
  arr.map((value) => value * 3).filter((value) => value % 5 === 0);
var tripleAndFilter1 = (arr) =>
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

var mapFilterAndReduce = (arr) => {
  arr
    .map((val) => val.firstname)
    .filter((val) => val.length > 5)
    .reduce((acc, next) => {
      acc[next] = next.length;
      return acc;
    }, {});
};
var mapFilterAndReduce1 = (arr) =>
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

var createStudentObj = (first, last) => {
  var student = {
    firstname: first,
    lastName: last,
  };
  return student;
};

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

var instructor = {
  firstName: "Colt",
  sayHi: function () {
    setTimeout(() => {
      console.log("hello " + this.firstName);
    }, 1000);
  },
};
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
