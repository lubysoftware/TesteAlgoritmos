//Questao 1
const setNewArr = (count,el) =>  {
    let newArr = [];
    while(count>0 && count--)
        newArr.push(el);
    return newArr
}
console.log(setNewArr(3,'a'));// ['a', 'a', 'a']
//Questão 2
const reverseArr = arr => {
    let reversedArr = [], index = arr.length -1;
    for(const el of arr){
        reversedArr[index] = el;
        index--;
    }
        return reversedArr
}
console.log(reverseArr([1,2,3,4])); // [4,3,2,1]
//questao3
const clearArr =  arr =>  arr.filter(el => !!el)
console.log(clearArr([false,0,null,1,2,'', undefined]))// [1,2]
//Questao 4
const nestedArrToObj = (param) =>  Object.fromEntries(param);
console.log(nestedArrToObj([["c",2],["d",4]])); // {c:2, d:4}
//Questao 5
const removeElementFromArr = (arr,...element) => arr.filter((el) => !element.includes(el))
console.log(removeElementFromArr([5,4,3,2,5], 5,3)) //[4,2]
//Questao 6
const filteredArr = (arr) => {
  return  arr.filter((el, index) => arr.indexOf(el) === index)
}
console.log(filteredArr([1,2,3,3,2,4,5,4,7,3])); //[1,2,3,4,5,7]
//Questao 7
const areArraysEqual = (arr1,arr2) => {
    if(arr1.length !== arr2.length)
        return false;
    for(let i = 0; i < arr1.length;i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
console.log(areArraysEqual([1,2,3,4],[1,2,3,4])); // true
//Questao 8
const nestedArrToUniqueArr = (arr) => arr.flat(Infinity);
console.log(nestedArrToUniqueArr([1, 2,[[3]], [4, 5]])) // [1, 2, 3, 4, 5]
//Questao 9
const divideArray = (arr,qty) => {
let finalArr = [], tempArr = [],count = 0;
    for(const el of arr){
        tempArr.push(el);
        count++;
        if(count === qty){
            count = 0;
            finalArr.push(tempArr);
            tempArr = [];
        }
    }
    finalArr.push(tempArr);
    return finalArr;
}
console.log(divideArray([1, 2, 3, 4, 5], 2)) //  [[1, 2], [3, 4], [5]]
//Questao 10
const findDuplicateElements = (arr1,arr2) => arr1.filter((el1) => arr2.includes(el1))
console.log(findDuplicateElements([6, 8], [8, 9])); //[8]