const accountId = "143232" 
let accountname = "ankit"
var accountemail = "ank@gmail.com"
accountstate = "odisha"

/* so variable can be declared by "var" and "let" and without any let and var but we use let and 
preferred not to use var because of block scope and finctional scope issue .
*/

// consant is declared by const and the value in it cannot be change 

console.log(accountname);
// we can use this but it will be take too much time    and    to print the value we will not use "" in print time

// so we use this table 
console.table(["accountId",accountemail,accountname,accountstate]);
// "" in the print statement will print the variable name not its value