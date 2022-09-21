// This is a single commment

/*
anything 
in h
here 
is a commented out
*/

// print something to develoepr console
console.log("Hello from JS file")


//declare a variable and assign to that varaibles
var countCandyCanes = 10

//calculate our profits if we sell each candy cane for .50 cents
var profits = .50* countCandyCanes

// print this out
console.log("We earned $", profits, "dollars this season", "we sold", countCandyCanes, "candy canes")


console.log("We're going to the store")
//we can use single quotes but might have to escape them if used in text
console.log('We\'re going to the store')

//materials
var costs = 2
var revenue = profits - costs

//debugger allows you to step throgh the code :)
//make sure to remove in production apps
debugger

//conditionals
// if our profit was grater than 0
if (revenue > 0) {
    //run this code
    console.log("Your employees get a bonus", "revenue: $", revenue)
} else if (revenue === 0){
    //no profits
    console.log("no bonus", "revenue: $", revenue)
}
else {
    //you went negative
    console.log("We need to cut costs", "revenue: $", revenue)
}


let userChoice1 = window.prompt("Do you go left or right")

//nested if statments
if (userChoice1 === "right"){
    console.log("You walked right. And ran into a fiery dragon")
    let userChoice2 = window.prompt("Do you fight the dragon or run?")
    if (userChoice2 === "fight"){
        console.log("you fought")
    }
}