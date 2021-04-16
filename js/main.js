
function run() {
    getInput();

    //general disp value
    document.getElementById('general').innerHTML = 
    `<kbd>${(q(input)/31).toFixed(4)}</kbd>`;

    document.getElementById('fact1').innerHTML = 
    `<kbd>${(q1(input)/3).toFixed(4)}</kbd>`;

    document.getElementById('fact2').innerHTML = 
    `<kbd>${(q2(input)/7).toFixed(4)}</kbd>`;

    document.getElementById('rest').innerHTML = 
    `<kbd>${(q3(input)/21).toFixed(4)}</kbd>`;

    document.getElementById('fisher1').innerHTML = 
    `<kbd>${((q1(input)/3)/(q3(input)/21)).toFixed(4)}</kbd>`;
    
    document.getElementById('fisher2').innerHTML = 
    `<kbd>${((q2(input)/7)/(q3(input)/21)).toFixed(4)}</kbd>`;

    document.getElementById('table').innerHTML = 
    `<kbd>${(tableValue).toFixed(4)}</kbd>`;

    document.getElementById('compare').innerHTML = 
    `<kbd>${comp()}</kbd>`;

}