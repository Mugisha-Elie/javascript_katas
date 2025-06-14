function triangle(length){
    let triangle = "";
    for(let i=0; i<length; i++){
triangle += "#";
console.log(triangle);
    }
    return 0;
}

triangle(5);


function pyramid(length){
    let pyramid = "";

    for(let i=0; i<length; i++){
        let hashes = "#".repeat(2*i+1);
        let spaces = " ".repeat(length-i-1);

        pyramid += spaces + hashes + "\n";
    }

    return pyramid;

}
console.log(pyramid(5));

function inverted(length){
    let pyramid = ""
    for(let i=0; i<length; i++){
        let hashes = "#".repeat(2 * (length-i) - 1);
        let spaces = " ".repeat(i+1);
        pyramid += spaces + hashes + "\n";
    }
    return pyramid;
}

console.log(inverted(5));