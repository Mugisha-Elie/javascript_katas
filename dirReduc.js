function dirReduc(arr){
    //The object to hold opposites
    const opposites = {
        NORTH : "SOUTH",
        SOUTH : "NORTH",
        EAST : "WEST",
        WEST : "EAST",
    }
    //Array to hold the final directions
    const result = [];

    //individual checking each direction
    for(let dir of arr){
        if(result[result.length-1] === opposites[dir]){
            result.pop();
        }else{
            result.push(dir);
        }
    }
    return result;
}
