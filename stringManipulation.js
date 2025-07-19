function reverseString (str) {
       let chrest =""; // Initialize an empty string to store the reversed result
     
    for ( i=0; i<=str.length; i++) { // loop backwards through the string 
        chrest[i] = str[str.length-i]; //putting each character in reverse order (since the loop is backwards )
   
    return chrest;
}
} 
function nbrChars (str) {
    let count = 0; // intialize a counter to count the characters
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') { //check if the character is not a space so we count only alphabetic charachters
            count++;
        }
    }
    return count;
}
function capitalize (str){
 for (i=1; i<=str.length; i++){
    if (str[i] ==" ") { // Check if the current character is a space
        str[i+1]= str[i+1].toUpperCase(); // we make the next character capital (since every two words are seprated by an space)
    }
 }
    return str;
}

