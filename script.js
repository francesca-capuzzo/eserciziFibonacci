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
    if (n === 0){
        return 0;
    }
    else if (n === 1){
        return 1;
    }

    let x = 0;
    let y = 1;
    for (let i = 2; i < n; i++) {
        y = x + y;
        x = y - x;
    }
    return x + y;
}

console.log(fibonacci(10));

y = 0 + 1 = 1
x = 1



