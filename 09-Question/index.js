/* *9)* Implemente um método divida um array por uma quantidade passada por parâmetro.<br>
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]] */

const divideArray = (array, number) => {
    if(!Array.isArray(array)) return 'O parametro não é um array';
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(i % number === 0) {
            newArray.push([]);
        }
        newArray[newArray.length - 1].push(array[i]);
    }
    return newArray;
}

console.log(divideArray([1, 2, 3, 4, 5], 2));
console.log(divideArray([1, 2, 3, 4, 5], 3));