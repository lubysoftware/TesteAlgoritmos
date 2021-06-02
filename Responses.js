// 1) RESPOSTA

function newArray(quantidade, item) {
    let data = []
    for (i = 0; i < quantidade; i++) {
        data.push(item)
    }
    return data
}

newArray(3, "a")


//2) RESPOSTA
const inverteArray = (array) => {

    let data = []
    for (i = array.length - 1; i >= 0; i--) {
        data.push(array[i])
    }
    return data
}
inverteArray([1, 2, 3, 4])

//3) RESPOSTA

function limpaArray(array) {
    let data = []
    for (i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "number" && array[i] > 0 || typeof (array[i]) === "string" && array[i].length > 0) {
            data.push(array[i])
        }
    }
    return data
}
limpaArray([1, 2, '', undefined], "Olá")
