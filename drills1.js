/* eslint-disable no-console */
/* eslint-disable strict */

function createGreeting(name,age){   

  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}.`;
}
function getYearOfBirth(age){
  if(age < 0)
    throw new Error("Age can not be negative");
  const yearOfBirth = 2019 - age;
  return yearOfBirth;
}
try { 
  const greeting1 = createGreeting('JT', -36);
  console.log(greeting1);
} catch (error) {
  console.log(error);
}
//console.log(greeting1);
//console.log(getYearOfBirth());
