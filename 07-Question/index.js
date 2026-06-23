 /* *7)* Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.<br>
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true */  

const compareArray = (array1, array2) => {
    if(!Array.isArray(array1) || !Array.isArray(array2)) return 'Os parametros não são arrays';
    if(array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i]) return false;
    }
    return true;
}

    console.log(compareArray([1,2,3,4],[1,2,3,4]));
    console.log(compareArray([1,2,3,4],[1,2,3,5]));