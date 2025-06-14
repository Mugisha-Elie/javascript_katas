function isPrime(integer){
    for(let x=2; x<integer; x++ ){
        if(integer % x === 0){
            console.log(integer+ " is divisible by "+x);
            return false;
        }
        
    }

    return true

}

var bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish(){
   var bookTitle = "The Little English";
    console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle)

