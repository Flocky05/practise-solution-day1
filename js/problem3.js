const array=[1,2,3,4,5,6,7];
const result=array.map(x=>x*x);
console.log(result);
const newresult=result.reduce((a, b) => a + b, 0)
console.log(newresult);
const avg=newresult/array.length;
console.log(avg);