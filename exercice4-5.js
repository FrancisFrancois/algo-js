function sqr(a) {
    return a*a;
}
 
function calcDistance(a1, b1, a2, b2) {
    return Math.sqrt(sqr(b2 - b1) + sqr(a2 - a1));
}

console.log(("Calcul la distance entre points A et B (1,1)-(2,2): " +calcDistance(1, 1, 2, 2)));
console.log(("Calcul la distance entre points A et B (1,1)-(3,1): " +calcDistance(1, 1, 3, 1)));
console.log(("Calcul la distance entre points A et B (4,1)-(1,1): " +calcDistance(4, 1, 1, 1)));
console.log(("Calcul la distance entre points A et B (-2,2)-(2,-2): " +calcDistance(-2, 2, 2, -2)));







