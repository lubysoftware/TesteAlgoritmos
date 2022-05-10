 /* *4)* Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.<br>
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4} */

 const arrayToObject = (array) => {
    if(!Array.isArray(array)) return 'O parametro não é um array';
    const newObject = {};
    for (let i = 0; i < array.length; i++) {
        newObject[array[i][0]] = array[i][1];
    }
    return newObject;
}

console.log(arrayToObject([["c",2],["d",4]]));