const array1=[1,2,3,4,5,6];
const array2=[12,13,14,15,16];
// const newArray=[].concat(array1,array2);
const newArray=[...array2,...array1];
console.log(newArray);
console.log(Math.max(...newArray));