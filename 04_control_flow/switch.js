// We use switch to check various conditions at a time - used often in redux

// switch syntax

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;

    default:
        console.log("default case match");
        break;
}