// let rawMessage = "    JavaScript is AWESOME! let's learn it together.    ";
// console.log(rawMessage);

// let trimmedMessage = rawMessage.trim();
// console.log(trimmedMessage);

// let lowerCaseMsg = trimmedMessage.toLowerCase();
// console.log(lowerCaseMsg);


// if(lowerCaseMsg.includes("awesome")){
    
//     console.log("awesome is included");
// }else{
//     console.log("awesome is not included");
// }

// let learnIndex = lowerCaseMsg.indexOf("learn");
// console.log(`learn is at: index ${learnIndex}`);

// let replaceAwesome = lowerCaseMsg.replace("awesome", "fun");
// console.log(replaceAwesome);

// let extractedSentence = lowerCaseMsg.slice(23, -1);
// console.log(extractedSentence);

// let splitString = lowerCaseMsg.split(" ")
// console.log(splitString);

// let arrayOfWords = splitString.join(",");
// console.log(arrayOfWords);

// let numberOfChars = rawMessage.length;
// console.log(numberOfChars);

// let firstChar = trimmedMessage.charAt(0);
// console.log(firstChar);

// let firstCharCap = lowerCaseMsg.charAt(0).toUpperCase();
// console.log(firstCharCap + lowerCaseMsg.slice(1));

let ABCs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let abcs = "abcdefghijklmnopqrstuvwxyz";

let ABCsArray = ABCs.split("");
let abcsArray = abcs.split("");

for(let i=0; i<ABCsArray.length; i++){
    console.log(`${ABCsArray[i]} : ${ABCsArray[i].charCodeAt(0)}`);
}
for(let i=0; i<abcsArray.length; i++){
    console.log(`${abcsArray[i]} : ${abcsArray[i].charCodeAt(0)}`);
}