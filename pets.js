//can traverse like array but fragile
let headerTag = document.body.children[1]
console.log(headerTag)

//query selector takes a css selector
// tag selector - we will use this first
// class selector
// id selector
//attribute selector
let adoptionRequirementsHeader = document.querySelector("h4")
console.log(adoptionRequirementsHeader)

//if tag doesn't exist it is null

//need the period to say class selector
let byClass = document.querySelector(".adoption-requirements-header")
console.log(byClass)

//select by id using #
let byId = document.querySelector("#highlighted-pet")
console.log(byId)

//find all tags that match selector (tag, class, id)
let allHeaderTags = document.querySelectorAll("h2")
console.log(allHeaderTags)

//find all child friendly animals
let allChildFriendlyAnimals = document.querySelectorAll(".child-friendly")
console.log(allChildFriendlyAnimals)

// you can access css properites of a tag by using the style object that is part of the tag object
console.log(byClass.style.backgroundColor)

//you can change it like any other properties
console.log("before",byClass.style.color)
byClass.style.backgroundColor = "blue"
console.log(byClass.style.backgroundColor)

console.log("before",byClass.style.color)
byClass.style.color = "white"
console.log(byClass.style.color)

//tool shed analogy

//build a door or new house
let header = document.createElement("h1")

header.style.backgroundColor = "red"

//this is wrong, textContent is not part of styling
header.style.textContent = "Jonathon's House"

header.textContent = "Jonathon's House"

//installing / adding house to end of street
document.body.append(header)

//create an image element
let img = document.createElement("img")

//can change properties like the dna of animals
img.setAttribute("src","./images/fluffy.jpg")


//add to end of document
document.body.append(img)

//going to select that ul list by id <ul id="adoptions-steps-list">
let adoptionSteps = document.querySelector("#adoptions-steps-list")
console.log("got the list", adoptionSteps)

//lets add another aodption step "Love your pet forever"
    //by creating a list item and 
let adoptionStepLi = document.createElement("li")
    //changing the text to "Love your pet forever"
adoptionStepLi.textContent = "Love your pet forever"
//be a little ffancy
adoptionStepLi.style.backgroundColor = "yellow"
adoptionStepLi.style.fontSize = "20px"

    //add a list item to that list I have, 
// document.body.append(adoptionStepLi) //can't just drop the door on the street, put it in the hosue it belongs in
adoptionSteps.append(adoptionStepLi)


//Rover got adopted today, remove him from the page
//got it by id with metal detcter
let roverSection  = document.querySelector("#rover-section")
console.log(roverSection)

//now lets remove it 
// document.body.remove(roverSection) // this is wrong demos the entire neighborhood :'(

//let's only destory the house with termites, that we told it to
roverSection.remove()


///high-levle
// we added a button in html, get it by id
let coryAdoptButton = document.querySelector("#cory-adopt-button")
// we need to listen for when this button is clicked
//scope creep from your lovely product manager Nohtanoj
    //remove that pet from screen
coryAdoptButton.addEventListener("click", function(){
    // button turns blue
    console.log("turn the button blue")
    coryAdoptButton.style.backgroundColor = "blue"
    //get that pet section by id 
    let corySection = document.querySelector("#cory-section")
    //demolition
    corySection.remove()
})
