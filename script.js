//************ ESERCIZIO 1 *************/
let n1 = 0;
let n2 = 1;
let n3;

function fibonacciSequence(number100) {
    for (let i = 0; i < number100; i++) {
        console.log(n1);
        n3 = n1 + n2;
        n1 = n2; 
        n2 = n3; 
    }
}
console.log(fibonacciSequence(100));

//speigazione in classe://///////////////////////////////////////////////////////////////////////////////////

let f0 = 0;
let f1 = 1;

function fibonacciNonRicorsivo() {
    
    for (let v = 0; v < 101; v++) {
        
        if (v === 0) {
            console.log(0);
            continue;
        }
        
        if (v === 1) {
            console.log(1);
            continue;
        }
        let f = f1 + f0;
        console.log(f);
        f0 = f1;
        f1 = f;
    }
}

fibonacciNonRicorsivo();

//SPIEGAZIONE:
// i0 --> n1=0 n2=1 n3=1
// i1 --> n1=1 n2=1 n3=2
// i3 --> n1=1 n2=2 n3=3
// i4 --> n1=2 n2=3 n3=5
// i5 --> n1=3 n2=5 n3=8
// i6 --> n1=5 n2=8 n3=13
// i7 --> n1=8 n2=13 n3=21
// i8 --> n1=13 n2=21 n3=34
// i9 --> n1=21 n2=34 n3=55
// i10 --> n1=34 n2=55 n3=89 ......


//************ ESERCIZIO 2 *************/

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }

    let x = 0;
    let y = 1;
    for (let i = 2; i < n + 1; i++) {
        y = x + y;
        x = y - x;
    }
    return x + y;
}

console.log(fibonacci(10));

//spiegazione in classe ///////////////////////////////////////////////////////////////////////////////////////

let fn_2 = 0;
let fn_1 = 1;

function fibonacciNonRicorsivo(maxPosition) {
    
    for (let v = 0; v < maxPosition; v++) {
        
        if (v === 0) {
            console.log(0);
            continue;
        }
        
        if (v === 1) {
            console.log(1);
            continue;
        }
        let fn = fn_1 + fn_2;
        console.log(fn);
        fn_2 = fn_1;
        fn_1 = fn;
        
    }
}

fibonacciNonRicorsivo(200);

//SPIEGAZIONE:
// i2 ==> y = x + y     y = 0 + 1    y = 1   ==> x + y = 2
//        x = y - x     x = 1 - 0    x = 1
// i3 ==> y = x + y                  y = 2   ==> x + y = 3
//        x = y - x     x = 2 - 1    x = 1      
// i4 ==> y = x + y                  y = 3   ==> x + y = 5
//        x = y - x     x = 3 - 1    x = 2
// i5 ==> y = x + y                  y = 5   ==> x + y = 8
//        x = y - x     x = 5 - 2    x = 3
// i6 ==> y = x + y                  y = 8   ==> x + y = 13
//        x = y - x     x = 8 - 3    x = 5
// i7 ==> y = x + y                  y = 13  ==> x + y = 21
//        x = y - x    x = 13 - 5    x = 8
//.....etcetera

//************ ESERCIZIO 3 *************/

let reverse;

function fibonacciReverse(number) {
    if (number === 0) {
        return 0;
    }
    if (number === 1) {
        return 1, 2;
    }
    if (number > 2) {
        reverse = (fibonacci(number - 1) + fibonacci(number - 2));
        return reverse[number];
    }
}

console.log(fibonacci(7));


//spiegazione in classe:////////////////////////////////////////////////////////////////////////////////////



function fibonacciNonRicorsivoPerPosizione(numero) {
    
    let fn2 = 0;
    let fn1 = 1;
    
    if (numero === 0) {
        return 0;
    }
    if (numero === 1) {
        return 1;
    }
    
    let position = 2;
    
    while (true) {
        let f = fn1 + fn2;
        if (f === numero) {
            return position;   
        }
        if (f > numero) {
            return;                              //è come dire return undefined.
        }
        
        position++
        fn2 = fn1;
        fn1 = f;
    }

}
console.log(fibonacciNonRicorsivoPerPosizione(21));


//************ ESERCIZIO 4 *************/

let risultato;

function fattoriale(numero) {
    if (numero === 0){
        return 1;
    }
    if (numero > 0){
        for (let k = 0; k < numero; k++) {
           risultato = numero * (fattoriale(numero - 1)); 
        }
    }
return risultato;
}

console.log(fattoriale(7));

//spiegazione in classe://///////////////////////////////////////////////////////////////////////////////

function fattoriale2(numero) {

    if (numero === 0) {
        return 1;
    }
    return numero * fattoriale2(numero - 1);
}

console.log(fattoriale(3));


//SPIEGAZIONE:
//0! = 1
//1! = 1 * 1 = 1
//2! = 2 * 1 = 2
//3! = 3 * 2 * 1 = 6
//4! = 4 * 3 * 2 * 1 = 24
//5! = 5 * 4 * 3 * 2 * 1 = 120 ...