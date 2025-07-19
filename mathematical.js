function factorial (n){
    let fact =1; // initialize fact  the variable to store the factorial result
    for (i=1; i<=n;i++){
        fact *= i;  
    }
    return fact;
}
function primeNumber (n){
    let i = 2; // Initialize i to 2 since 1 is already a diviser for all the numbers 
    while (i <= n / 2 ) {
        if (n % i === 0)  { 
            return false;
         }
         i++; 
    }
    return true;
}
function fibonacciSequence (n) {
    let t = [];  
    t[0] = 0
    t[1]=1
    for (i=2; i<=n ; i++) {
    t[i] = t[i-1] + t[i-2] ;
    }
    return t ;
    }