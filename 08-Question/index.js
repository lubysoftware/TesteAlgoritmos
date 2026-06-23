  /* *8)* Implemente um método que remova os aninhamentos de um array de arrays para um array unico.<br>
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]  */

const flattenArray = (array) => {
    if(!Array.isArray(array)) return 'O parametro não é um array';
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                newArray.push(array[i][j]);
            }
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

    console.log(flattenArray([1, 2, [3], [4, 5]]));