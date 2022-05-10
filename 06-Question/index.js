 /* *6)* Implemente um método que retorne um array, sem valores duplicados.<br>
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7] */

const removeDuplicates = (array) => {
    if(!Array.isArray(array)) return 'O parametro não é um array';
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

    console.log(removeDuplicates([1,2,3,3,2,4,5,4,7,3]));