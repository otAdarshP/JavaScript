const accountId = 1223
var accountCode = "12345abcde"
let accountEmail = "adarsh@oogle.com"
accountCity = "Jaipur" // not a good practice
let accountHolder; // space has been created in the memory, but the valus is UNDEFINED.

/*
    const -> FINAL, Cannot be changed later in the code. This is used to define a constant.
    let -> changable, can be updated later in the code. This is used for Variables.
*/

/*
    While we can still use the "var" as a variable to define in the memory, it is not recommended as a good practice.
    This is to the issues it creates with the Block Scope and the Functional scope.
    Hence, as per standard coding practices, we would only be using the variable "let" for nameplacing in the memory.
*/

console.table ([accountId, accountCode, accountEmail, accountCity, accountHolder])