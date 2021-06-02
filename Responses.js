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
