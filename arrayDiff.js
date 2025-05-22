function arrayDiff(a,b){
    //create a list to hod the final result
    let result = [];
    //Go through each element of a
    for(let i=0; i<a.length; i++){
        let item = a[i] // taking one item at a time
        //check if item is NOT in b
        let found = false;
        for(let j=0; j< b.length; j++){
            if(item === b[j]){
                found = true; //item found so we don't want it
                break;
            }
        }
        if(found === false){
            result.push(item);
        }
    }
    return result;
}
