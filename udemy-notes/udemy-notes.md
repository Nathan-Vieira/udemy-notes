## #ES 20 something

###link

- https://www.udemy.com/course/the-advanced-web-developer-bootcamp/learn/quiz/371466#content

&nbsp;
&nbsp;

####Arrow functions

var add = function(a,b){
        return a+b;
}
#####fuction can be re written as
var add = (a,b) => a+b;

var add = function(a,b){
        return a+b;
}
#####fuction can be re written as
var add = (a,b) => a+b;

####arrow functions do not get own keyword this, THIS refers to this directly outside of arrow function

var instructor = {
    firstname: 'nate',
    sayHI: function(){
        setTimeout(function(){
            console.log("hello " + this.firstname);
        }, 1000)
    }

}