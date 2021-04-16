
var input = [
    [0.14, 0.25, 0.31, 0.36, 0.65, 0.65, 0.70, 0.34],
    [0.38, 0.37, 0.38, 0.36, 0.40, 0.36, 0.48, 0.32],
    [0.03, 0.28, 0.33, 0.57, 0.38, 0.78, 0.78, 0.46],
    [0.35, 0.38, 0.42, 0.47, 0.60, 0.91, 0.89, 0.59]
];

var tableValue = 0;

function getInput() {
    if (document.getElementById('11').value != ''){
        input = [];
        for (let i = 1; i <= 4; i++) {
            let row = [];
            for (let j = 1; j <= 8; j++) {
                let val = document.getElementById(`${i * 10 + j}`).value;
                row.push(+val);
            }
            input.push(row);
        }
    }
        
}

function level(val){
    switch (val) {
        case 0.001:
            tableValue = 7.18;
            break;
        case 0.01:
            tableValue= 4.57;
            break;
        case 0.05:
            tableValue = 2.95;
        default:
            break;
    }
}