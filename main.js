// let res = document.getElementById('result');

// alert(res.innerHTML);
// res.innerHTML = '34'

// let number = document.querySelectorAll('num');

// alert(number[3].innerHTML);

let a = null;
let b = null;
let operator = null;
let selectedOperator = null;

let result = document.getElementById('result');
let clear_btn = document.getElementById('clear_btn');
let backspace_btn = document.getElementById('backspace_btn');
let num_btn = document.querySelectorAll('.num');
let operator_btn = document.querySelectorAll('.operator');
let result_btn = document.getElementById('result_btn');

// result.innerHTML = 345;

function minimalize () {
    if (result.innerHTML.length > 5) {
        result.style.fontSize = "36px";
    } else {
        result.style.fontSize = "96px";
    }
}

function clearState () {
    result.innerHTML = 0;
    a = null;
    b = null;
    operator = null;
    minimalize();
}

clear_btn.addEventListener('click', clearState);

function deleteNumber () {
    let result_lenght = result.innerHTML.length;

    if (result_lenght === 1) {
        result.innerHTML = 0;
    } else {
        result.innerHTML = result.innerHTML.slice(0, result_lenght-1);
    }
    minimalize();
}

backspace_btn.addEventListener('click', deleteNumber);

for (let number of num_btn) {
    number.onclick = function() {   // лучше addEventListener
        if ( result.innerHTML != 0 && result.innerHTML != selectedOperator ) { // вынести в константу
            result.innerHTML += number.innerHTML
        } else { 
            result.innerHTML = number.innerHTML;
        }
        minimalize();
    }
}

for (let op of operator_btn) {
    op.onclick = function() {
        operator = op.id;

        switch (operator) {
            case 'sum':
                selectedOperator = '+';
                break;
            case 'sub':
                selectedOperator = '-';
                break;
            case 'mult':
                selectedOperator = '*';
                break;
            case 'div':
                selectedOperator = '/';
                break;
        }
        if ( a === null) {
            a = result.innerHTML;
            result.innerHTML = selectedOperator;
        } else if ( b === null) {
            b = result.innerHTML;
        }
    }
}

function getResult () {
    b = result.innerHTML;
    result.innerHTML = calc(a, b, operator);

    a = null;
    b = null;
    operator = null;
}

result_btn.addEventListener('click', getResult);

function calc (a, b, operator) {
    a = +a;
    b = +b;
    let operations = {
        sum: a + b,
        sub: a - b,
        mult: a * b,
        div: a/b,
    }
    
    result.innerHTML = operations[operator];
    // alert(result.innerHTML);
    return operations[operator];
}

// for (let op of operator_btn) {
//     op.onclick = function() {
//         operator = op.id;
        
//         switch (operator) {
//             case 'sum':
//                 selectedOperator = '+';
//                 break;
//             case 'sub':
//                 selectedOperator = '-';
//                 break;
//             case 'mult':
//                 selectedOperator = '&#735;';
//                 break;
//             case 'div':
//                 selectedOperator = '&#247;';
//                 break;
//         }
//     } 

    // function addOperator() {
    //     operator = op.id;
        
    //     switch (operator) {
    //         case 'sum':
    //             selectedOperator = '+';
    //             break;
    //         case 'sub':
    //             selectedOperator = '-';
    //             break;
    //         case 'mult':
    //             selectedOperator = '&#735;';
    //             break;
    //         case 'div':
    //             selectedOperator = '&#247;';
    //             break;
    //     }
    // }
    // for (let op of operator_btn) {
    //     op.addEventListener('click', addOperator);
    // }
    

//         if ( a === null) {
//             a = result.innerHTML;
//             result.innerHTML = selectedOperator;
//         } else if ( b === null) {
//             b = result.innerHTML;
//         }
//     }
// }
