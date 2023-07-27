//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){
    for (let name of names) {    // at the first iteration, search the dog_strings
        if (string.includes(name)) {    // IF dog_name is IN dog_strings, return "Matched dog_name"
            console.log (name, ": Matched dog_name")
        } else {    // ELSE "No Matches"
            console.log (name, ": No Matches")
        }
    }
}

//Call method here with parameters
console.log(findWords(dog_string, dog_names))

// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
console.log(arr.length)

function replaceEvents(arr){
    let i = 0
    while (i < arr.length) {     // Will need a counter, while loop??
        if (i == 0 || i%2==0) {     // if counter is even (divisible by 2 with remainder 0) then replace string with "even index"
            arr.splice(i, 1, "even index")
        }
        i ++ // increment up 
    }
    console.log(arr)
}

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

console.log(replaceEvents(arr))

// //============Kata #1 ============//

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

let num1 = 123
let num2 = 999
let num3 = -100

function number_to_string(num) {
    return `${num}`
}

console.log(typeof(number_to_string(num1)), number_to_string(num1))
console.log(typeof(number_to_string(num2)), number_to_string(num2))
console.log(typeof(number_to_string(num3)), number_to_string(num3))

// //============Kata #2 ============//

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

let string1 = 'world'
let string2 = 'hello my name is...'

function reverse_string(words) {
    return words.split("").reverse().join("");
}

console.log(reverse_string(string1))
console.log(reverse_string(string2))