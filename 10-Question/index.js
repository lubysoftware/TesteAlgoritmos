/* *10)* Implemente um método que encontre os valores comuns entre dois arrays.<br>
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8] */

const commonValues = (array1, array2) => {
    if(!Array.isArray(array1) || !Array.isArray(array2)) return 'Os parametros não são arrays';
    const newArray = [];
    for (let i = 0; i < array1.length; i++) {
        if(array2.includes(array1[i])) {
            newArray.push(array1[i]);
        }
    }
    return newArray;
}

    console.log(commonValues([6, 8], [8, 9]));
