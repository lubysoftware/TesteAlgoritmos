/* *3)* Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).<br>
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2] */

const clearArray = (array) => {
    if(!Array.isArray(array)) return 'O parametro não é um array';
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] !== false && array[i] !== undefined && array[i] !== '' && array[i] !== 0 && array[i] !== null) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(clearArray([1,2,'', undefined]));