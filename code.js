// I want to create an app whick picks a random domino for the user

// I want my Javascript to be able to PICK any Domino element, how?
// anything sort of array-like into an array, 
// use Array.from() to convert it into an array.
// Nodelist -> Array.from() 

function getRandomNumber (min, max) { // min and max included
    //SOURCE:https://stackoverflow.com/a/7228322/1034856
    //LICENSE: https://creativecommons.org/licenses/by-sa/4.0/
   return Math.floor(Math.random() * (max - min + 1) + min)
}

let dominoList = document.querySelectorAll(".domino-list > li")
console.log(dominoList)

let firstIndex = 0
let lastIndex = dominoList.lenght - 1
  // I want a random number between firstIndex and lastIndex
  let randomIndex = getRandomNumber (firstIndex , lastIndex)
  let randomDominoElement =  dominoList[randomIndex]
console.log(randomDominoElement)

 randomDominoElement.classList.add("active")
 
 
 
 
 
 
 
 
 
 
 //randomDominoElement.classList.toggle("hidden")
 

// let element = document.createElement("h1") 
//Element.src = "https"
   //console.log(element)

// matchingElement.remove()
//matchingElement.classList.add("giraffe")

 // console.log(matchingElement)

// document.write("<h2>SOMETHING ON THE PAGE</h2>")