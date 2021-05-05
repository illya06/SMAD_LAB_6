

function run(reliability) {
    data_1_a = (document.getElementById('data1').value).split(" ").map(Number).filter(Boolean);
    data_2_a = (document.getElementById('data2').value).split(" ").map(Number).filter(Boolean);
    data_1_b = (document.getElementById('data1_b').value).split(" ").map(Number).filter(Boolean);
    data_2_b = (document.getElementById('data2_b').value).split(" ").map(Number).filter(Boolean);



    switch (reliability) {
        case 0.999:
            t = 3.40
            break;
        case 0.99:
            t = 2.58
            break;
        case 0.95:
            t = 1.96
            break;
    }

    setParameters()
}

const getAvg = (data) => data.reduce((a, b) => a + b) / data.length

function calcMidStat(data) {
    let sum = 0
    let len = data.length
    let avg = getAvg(data)
    for (let i = 0; i < len; i++)
        sum += Math.pow(data[i] - avg, 2)

    return Math.sqrt(sum / len)
}

function calcKovariation(data1, data2) {
    let sum = 0
    let len = data1.length
    let avg1 = getAvg(data1)
    let avg2 = getAvg(data2)

    for (let i = 0; i < len; i++)
        sum += (data1[i] - avg1) * (data2[i] - avg2)

    return sum / len
}

function setParameters() {
    Sx = calcMidStat(data_1_a)
    Sy = calcMidStat(data_2_a)
    K = calcKovariation(data_1_a, data_2_a)
    R = K / (Sx * Sy)

    Z0 = Math.log((1 + R) / (1 - R)) / 2
    let ZKoef = t / Math.sqrt(data_1_a.length - 3)
    let RKoef = t * (1 - R * R) / Math.sqrt(data_1_a.length)

    //print results
    document.getElementById('a_K').innerHTML =
        `<kbd>${K.toFixed(4)}</kbd>`;

    document.getElementById('a_Sx').innerHTML =
        `<kbd>${Sx.toFixed(4)}</kbd>`;

    document.getElementById('a_Sy').innerHTML =
        `<kbd>${Sy.toFixed(4)}</kbd>`;

    document.getElementById('a_r').innerHTML =
        `<kbd>${R.toFixed(4)}</kbd>`;

    document.getElementById('fisher').innerHTML =
        `<kbd>${(Z0 - ZKoef).toFixed(4)} < Z = (${(Z0).toFixed(4)}) < ${(Z0 + ZKoef).toFixed(4)}</kbd>`;

    document.getElementById('korel').innerHTML =
        `<kbd>${(Math.tanh(Z0 - t / Math.sqrt(data_1_a.length - 3))).toFixed(4)} < R = (${(R).toFixed(4)}) < ${(Math.tanh(Z0 + t / Math.sqrt(data_1_a.length - 3))).toFixed(4)}</kbd>`;

    document.getElementById('verdict').innerHTML =
        `<kbd> R = (${(R).toFixed(4)}) < len = (${(2 * ZKoef).toFixed(4)}) ? ${2 * ZKoef < R ? "Так [зв'язок є]" : "Ні [зв'язку немає]"}</kbd>`;

    Sx = calcMidStat(data_1_b)
    Sy = calcMidStat(data_2_b)
    K = calcKovariation(data_1_b, data_2_b)
    R = K / (Sx * Sy)

    let RomanKoef = 3 * ((1 - R * R) / Math.sqrt(data_1_b.length))
    document.getElementById('b_K').innerHTML =
        `<kbd>${K.toFixed(4)}</kbd>`;

    document.getElementById('b_Sx').innerHTML =
        `<kbd>${Sx.toFixed(4)}</kbd>`;

    document.getElementById('b_Sy').innerHTML =
        `<kbd>${Sy.toFixed(4)}</kbd>`;

    document.getElementById('b_r').innerHTML =
        `<kbd>${R.toFixed(4)}</kbd>`;

    document.getElementById('b_rkoef').innerHTML =
        `<kbd>${RomanKoef.toFixed(4)}</kbd>`;

    document.getElementById('b_roman').innerHTML =
        `<kbd>korel = (${R.toFixed(4)}) > roman = (${RomanKoef.toFixed(4)}) ? ${R > RomanKoef ? "Так [зв'язок є]" : "Ні [зв'язку немає]"}</kbd>`;
}

