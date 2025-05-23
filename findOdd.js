function findOdd(A){
    
    let result = ""; // for holding the results

    //First, we need to loop through all array elements
    for(let i=0; i<A.length; i++){
        let count = 0; // for counting the number of appearances
        
        //Now we compare how many times it appears and update count

        for(let j=0; j<A.length; j++){
            if( A[i] === A[j]){
                count++;
            }
        }
        if(count % 2 != 0){
            return A[i];
        }
    }
    

}
console.log(findOdd([1,2,1,3,1,1,1,]));