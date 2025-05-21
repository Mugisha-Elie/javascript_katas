function duplicateEncode(word){
    //convert everything to lowercase to ignore character case
    word = word.toLowerCase();
    //Variable to hold the final result after encoding characters to "(" or ")"
    let result = "";

    //Loop to go through each letter of the word
    for(let i=0; i < word.length; i++ ){
        let char = word[i];
        let count = 0;

        // loop for counting how many times the assigned character is repeated
        for(let j = 0; j < word.length; j++){
            if( char === word[j]){
                count ++;
            }
        }
        //Condition to make sure that if the char appears more than once it assigns ")" and if only one "("
        if(count > 1){
            result += ")";
        }else{
            result += "(";
        }
    }
    return result;
    
}

console.log(duplicateEncode("success"));