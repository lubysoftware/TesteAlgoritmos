/* *1)* Implemente um método que crie um novo array baseado nos valores passados.<br>
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a'] */

const createNewArray = (value, variable) => {
    if(typeof(value) !== 'number') return 'O primeirovalor não é um número';
    const newArray = [];
    for (let i = 0; i < value; i++) {
        newArray.push(variable);
    }
    return newArray;
}

console.log(createNewArray(3, 'a'));