function minMax (t) {
    let min= t[0]; // Initialise min à la valeur à l'index 1 (devrait être t[0] pour le premier élément)
    let max = t[0]; // Initialise max à la valeur à l'index 1 (idem, mieux t[0])

for (i=0; i<= t.length-1; i++) {
    if (t[i] < min) {
        min = t[i];
    }
    if (t[i] > max) {
        max = t[i];
    }

}
return [min, max];
}
function sumArray (t) {
    let sum =0; 
    for (i=0; i< t.lenght; i++) {
        sum += t[i];
    }
}
function filterarray (t) {
    return t.filter((num) => num > 0); // Returns a new array with only positive numbers
}

