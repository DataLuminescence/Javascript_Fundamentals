// GIVEN 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)
                              
// PREDICTION 1
// Creates variable randomCar and assigns the first value in the array to it. Then creates another variable otherRandomCar and 
// assigns the second value in the array to it. Prints 'Tesla' then Mercedes on next line.

// GIVEN 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);
                              
// PREDICTION 2
// Creates a variable with the property name from the employee object, then renames it to otherName. We print name, but that 
// variable is not defined so we have a reference error. 

// GIVEN 3

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// PREDICTION 
// Creates a variable called password with the value '12345'. Then we attempt to get the password attribute from the person object
// however, this property does not exist. We also rename the property to hashedPassword so there are no conflicts with the previoius
// variable which is a constant. We print password as '12345' then hashedPassword which is undefined. 

// GIVEN 4

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

// PREDICTION 4
// Creates a variable named first with the value of the 2nd element in the array because of the comma we put before first. Creates a 
// variable named second with the 4th element in the array due to commas. Creates a variable named third with the 9th element in the
// array because of commas. Then prints False and True for the two conditional statements inside the two console logs

// GIVEN 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// PREDICTION 5
// Creates variable names key with 'value' as the value from the object lastTest. Creates variable named secondKey with the value of 
// the array in the object lastTest. Creates variable named willThisWork with the second element of the array in secondKey because 
// we skip the first element using a comma. Prints 'value'. Prints the entire array or address in memory?. Prints the first element 
// in the array. Prints the second element in the secondKey array.