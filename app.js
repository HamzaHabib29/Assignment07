// --------------------------------------------------------Assignment # 21-25 JAVASCRIPT--------------------------------------------------------------------------

// Task01
// var firstName = prompt("Enter Your First Name").split(" ");
// for (var i = 0; i < firstName.length; i++) {
//   firstName[i] =
//     firstName[i][0].toUpperCase() + firstName[i].substring(1).toLowerCase();
// }
// firstName = firstName.join(" ");

// var lastName = prompt("Enter Your Last Name").split(" ");
// for (var i = 0; i < lastName.length; i++) {
//   lastName[i] =
//     lastName[i][0].toUpperCase() + lastName[i].substring(1).toLowerCase();
// }
// lastName = lastName.join(" ");

// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);

// Task02
// var input = prompt("Enter Your favourite Mobile Phone Model")
// document.write("My favourite phone is: " + input + "<br>")
// document.write("Length of string: " + input.length)

// Task03
// var word = "Pakistani";
// document.write("String: " + word + "<br>")
// document.write("Index of 'n': " + word.indexOf('n'))

// Task04
// var word = "Hello World";
// document.write("String: " + word + "<br>")
// document.write("Last Index of 'l': " + word.lastIndexOf('l'))

// task05
// var word = "Pakistani";
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + word.charAt(3));

// Task06
// var firstName = prompt("Enter Your First Name").split(" ");
// for (var i = 0; i < firstName.length; i++) {
//   firstName[i] =
//     firstName[i][0].toUpperCase() + firstName[i].substring(1).toLowerCase();
// }
// firstName = firstName.join(" ");

// var lastName = prompt("Enter Your Last Name").split(" ");
// for (var i = 0; i < lastName.length; i++) {
//   lastName[i] =
//     lastName[i][0].toUpperCase() + lastName[i].substring(1).toLowerCase();
// }
// lastName = lastName.join(" ");

// var fullName = firstName.concat(" ", lastName);
// alert("Welcome " + fullName);

// Task07
// var word = "Hyderabad";
// document.write("City: " + word + "<br>");
// document.write("After replacement: " + word.replace("Hyder", "Islam"));

// Task08
// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Before: " + message + "<br>");
// document.write("After Replace: " + message.replacea(/and/g, "&"));

// Task09
// var str = "472";
// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br>");
// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof +str);

// Task10
// var input = prompt("Write some word");
// document.write("User Input: " + input + "<br>")
// document.write("Upper case: " + input.toUpperCase())

// Task11
// var input = prompt("Write some word: ");
// document.write("User Input: " + input + "<br>")
// document.write("Title case: " + input[0].toUpperCase() + input.substring(1))

// Task12
// var num = 35.36;
// document.write("Number: " + num + "<br>");
// var string = num.toString();
// var de = string.replace(".", "");
// document.write("Result: " + de);

// Task13
// var username = prompt("Enter Username");
// for (var i = 0; i < username.length; i++) {
//   if (
//     username.charCodeAt(i) === 33 ||
//     username.charCodeAt(i) === 44 ||
//     username.charCodeAt(i) === 46 ||
//     username.charCodeAt(i) === 64
//   ) {
//     alert("Please Enter Valid Username");
//     break;
//   }
// }

// Task14
// var bakery = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
// var search = prompt(
//   "Welcome to ABC Bakery. What do you want to order sir/Ma'am?"
// ).split(" ");

// for (var i = 0; i < search.length; i++) {
//   search[i] = search[i][0].toUpperCase() + search[i].slice(1).toLowerCase();
// }
// search = search.join(" ");

// if (bakery.indexOf(search) !== -1) {
//   document.write(
//     search +
//       " is <b>available</b> at index " +
//       bakery.indexOf(search) +
//       " in our bakery."
//   );
// } else {
//   document.write(
//     "We are sorry. " + search + " is <b>not available</b> in our bakery."
//   );
// }

// Task15
// var password = prompt("Enter Password");
// var number = false;
// var alpaUpper = false;
// var alpaLower = false;

// if (password.length >= 6) {
//   if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//     document.write("Password can not begin with a number <br>");
//     document.write("Please enter a valid password");
//   } else {
//     for (var i = 0; i < password.length; i++) {
//       if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
//         number = true;
//       } else if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
//         alpaUpper = true;
//       } else if (
//         password.charCodeAt(i) >= 97 &&
//         password.charCodeAt(i) <= 122
//       ) {
//         alpaLower = true;
//       }
//     }

//     if (number && (alpaUpper || alpaLower)) {
//       document.write("Password is valid");
//     } else {
//       document.write("Password must contain alphabets and numbers");
//     }
//   }
// } else {
//   document.write("Password must be 6 character long");
// }

// Task 16
// var university = "University of Karachi";
// var spliting = university.split('');

// for(var i = 0; i < spliting.length; i++){
//   document.write(spliting[i] + "<br>")
// }

// Task 17
// var input = prompt("Enter sentence")
// document.write("User input: " + input + "<br>");
// document.write("Last Character of input: " + input.charAt(input.length - 1))

// Task 18
var string = "The quick brown fox jumps over the lazy dog";
var find = "the";
var split = string.split(" ");

var count = 0;

for (var i = 0; i < split.length; i++) {
  if (split[i] === find) {
    count++;
  }
}

if(count === 0){
  document.write("Word not found <br>")
}

document.write("Text: " + string + "<br>")
document.write("There are " + count + " occurrence of word " + "'" + find + "'")