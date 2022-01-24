let f0 = 1;
let numero_1 = 1;

function fattorialeNonRicorsivo(numero) {
    if (numero === 0) {
        return 1;
    }
    for (let i = 1; i <= numero; i++) {

        console.log(f = i * numero_1);
        numero_1 = f;
    }
    return f;
}

fattorialeNonRicorsivo(10);

// function factorialize(num) {
//     var factorial = 1;
//     for (var i = 2; i <= num; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   }
//   console.log(factorialize(10));
