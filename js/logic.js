
// function x(numbers) {
//     let res = 0
//     for (let i = 0; i <= 7; i++)
//         res += numbers[i]

//     return res / (numbers.length)
// }

//group 1 mid stat
function x1(data, row) {
    let res = 0
    for (let i = 0; i < 8; i++)
        res += +data[row][i]

    return res / 8
}

//group 2 mid stat
function x2(data, col) {
    let res = 0
    for (let i = 0; i < 4; i++)
        res += +data[i][col]

    return res / 4
}

//general mid stat
function x(data) {
    let res = 0
    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 8; j++)
            res += +data[i][j]

    return res / 32
}

//general dispersion
function q(data) {
    let xGeneral = x(data)
    let res = 0

    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 8; j++)
            res += Math.pow(data[i][j] - xGeneral, 2)

    return res
}

//group 1 dispersion
function q1(data) {
    let xG = x(data)
    let res = 0

    for (let i = 0; i < 4; i++)
        res += Math.pow(x1(data, i) - xG, 2)

    return res * 8
}

//group 2 dispersion
function q2(data) {
    let xG = x(data)
    let res = 0

    for (let i = 0; i < 8; i++)
        res += Math.pow(x2(data, i) - xG, 2)

    return res * 4
}

//zalyshkova
function q3(data) {
    let res = 0

    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 8; j++)
            res += Math.pow(data[i][j] - x1(data, i) - x2(data, j) + x(data), 2)

    return res
}

function comp() {
    let ret = ''
    let tv = tableValue

    let f1 = (q1(input) / 3) / (q3(input) / 21)
    let f2 = (q2(input) / 7) / (q3(input) / 21)

    if (f1 < tv && f2 < tv)
        ret = `(${f1.toFixed(2)} < ${tableValue.toFixed(2)} && ${f2.toFixed(2)} < ${tableValue.toFixed(2)}) -> можна знехтувати обома`
    else if (f1 < tv && f2 > tv)
        ret = `(${f1.toFixed(2)} < ${tableValue.toFixed(2)} && ${f2.toFixed(2)} > ${tableValue.toFixed(2)}) -> можна знехтувати першим критерієм`
    else if (f1 > tv && f2 < tv)
        ret = `(${f1.toFixed(2)} > ${tableValue.toFixed(2)} && ${f2.toFixed(2)} < ${tableValue.toFixed(2)}) -> можна знехтувати другим критерієм`
    else
    ret = `(${f1.toFixed(2)} > ${tableValue.toFixed(2)} && ${f2.toFixed(2)} > ${tableValue.toFixed(2)}) -> обоє впливають на результат`
    return ret
}