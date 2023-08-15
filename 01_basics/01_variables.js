const accountId = 144553
let accountEmail = "kishan@google.com"
var accountPassword = "12345"
accountCity = "Bengaluru"

// accountId = 2  // not allowed
accountEmail = "ks@ks"
accountPassword = "53421"
accountCity = "Kolkata"
let accountState;
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);