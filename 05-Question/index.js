  /* *5)* Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2] */

const removeArray = (array, ...values) => {
    if(!Array.isArray(array)) return 'O parametro não é um array';
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(!values.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeArray([5,4,3,2,5], 5,3));