/* 
Adds up every value in a sequence, from 1 up to a given input
This version uses the naive method of a loop
Ex: target = 3, returns 1 + 2 + 3 = 6
*/
function AddUpSlow(target) {
  let sum_total = 0;
  for (let i = 1; i <= target; i++) {
    sum_total += i;
  }
  return sum_total;
}

/*
Adds up every value in a sequence, from 1 up to a given input
Instead of a loop, directly calculates total using triangular number formula:
    value = target * (target + 1) / 2;
*/
function AddUpFast(target) {
  return (target * (target + 1)) / 2;
}
