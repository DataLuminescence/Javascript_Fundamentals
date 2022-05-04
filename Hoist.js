// GIVEN 1
// console.log(hello);     
// var hello = 'world';   
                              
// PREDICTION 1
// It can't print world because it is declared after. However the hoist creates the hello var so there is no error. 

// GIVEN 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// PREDICTION 2
// Since needle variable is in the function it takes on a value of 'magnet'. So the console.log prints 'magnet'

// GIVEN 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// PREDICTION 3
// Since the brendan variable exists in the function its scope is in the function. Its value is assigned in the function as 'only okay'
// However, the print function is never called so the global version of the variable brendan is used to print out 'super cool'

// GIVEN 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// PREDICTION 4
// Variable food is outside the function so it takes on the value of 'chicken'. We print 'chicken'. Then eat function gets called, but 
// the variable food now has a value of 'half-chicken' since food is hoisted despite a declaration, until the end of the function. 

// GIVEN 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// PREDICTION 5
// The call to mean() causes an error because mean() is never declared as a function.

// // GIVEN 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// PREDICTION 6
// First print statement prints undefined because the value of genre has not yet been assigned. Rewind function gets acalled and
// the function prints "rock", then r&b. Then we print "disco" as it is the global value of genre. 

// GIVEN 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// PREDICTION 7
// Prints "san jose", then calls learn function which prints out "seattle", then "burbank", and then we print "san jose" again.

// GIVEN 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// PREDICTION 8
// Function makeDojo gets called from the console log. The functions sets the name to "Chicago", and the students to 65. The conditional
// statement is met for dojo.students > 50. So dojo.hiring is set to true. The function returns object to be printed out. Then the second 
// console log calls makeDojo. We set dojo.name to "Berkeley" and dojo.students to 0. The conditional statement is met for students <= 0,
// there is an error here because dojo is a constant and the variable can't be assigned a new value unless its in the form dojo.something