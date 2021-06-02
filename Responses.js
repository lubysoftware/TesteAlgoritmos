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

//4) RESPOSTA
const transformObject = (array) => {
    const array2 = Object.fromEntries(array)
    return array2
}
transformObject([["c", 2], ["d", 4]])

//5) RESPOSTA

const removeItems = (array, item1, item2) => {
    const newArray = array.filter((item) => {
        if (item !== item1 && item !== item2) {
            return item
        }
    })
    return newArray
}
removeItems([5, 4, 3, 2, 5], 5, 3)

// 6) RESPOSTA
const valueUnique = (array) => {
    let newArray = []
    newArray = array.filter((number) => {
        if (newArray.indexOf(number) === -1) {
            return newArray.push(number)
        }
    })
    return newArray
}
valueUnique([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])

// 7) RESPOSTAS
const isEqual = (array1, array2) => {
    if (array1 === array2) {
        return true
    } else {
        return false
    }
}
isEqual()

// 8) RESPOSTA
const uniqueArray = (array) => {
    let newArray = []
    newArray = array.map((number) => {
        newArray.push(number)
    })
    return newArray
}
uniqueArray([1, 2, [3], [4, 5]])
