function factorial(a) {

  if (a === 0)
  {
     return 1;
  }

  return a * factorial(a-1);
}
console.log(factorial(10));
console.log(factorial(15));
console.log(factorial(20));

