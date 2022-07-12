/** Complete the simpleArraySum function in the editor below.
 It must return the sum of the array elements as an integer.

 simpleArraySum has the following parameter(s):

 ar: an array of integers*/

function simpleArraySum(ar) {
  if (ar.length === 0) {
    return 0;
  }
  return ar[0] + simpleArraySum(ar.splice(1, ar.length))
}

console.log(simpleArraySum([2, 3, 5, 10, 5]))
