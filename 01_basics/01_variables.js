const accountId = 112211
let accountEmail = "hihello@gmail.com"
var accountPassword = 121212
accountLocation = "Japan" // Varible without keyword still works but bad practice.
let accountBalance // Undefined Varible -> Which means varible declared but not assigned any value.

console.log(accountId);


accountEmail = "hellohi@gmail.com"
accountPassword = 212121
accountLocationS = "Korea"


// Note: Assignment to constant error, Cause re-assigning to a const varible is no allowed
// accountId = 323232  


// Note: Instead of multiple logs just one simple line to print all data.
console.table([accountId,accountEmail,accountPassword,accountLocation,accountBalance])


/*
Summary:
-var- Avoid in your code cause it's issues with Block-Scope and funtional-scope.
-const- Use as your default variable, Cause Block-Scope and Immutable or can't be reassigned. and Can't be re-declared within same scope.
-let- Use where you can't use -const-, Block-Scope and mutable or cann be re-assigned and re-declared.
-Blocl-Scope means within this { }.
*/
