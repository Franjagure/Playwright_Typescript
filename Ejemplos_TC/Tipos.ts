

// let data: any
// data = "Rodrigo"
// console.log(data)
// data = 34
// console.log(data)

// let n: string = "Erika";
// console.log(n);

// let t_a: number = 34
// console.log(typeof t_a);

// let bandera: Boolean
// bandera = false;
// console.log(bandera)

// let ap = "Villanueva"
// console.log(typeof ap)
// let mul=456*34
// console.log(mul)

let colores: string[] = ["rojo","verde","azul"]
// console.log(colores)
 let numeros: number[] = [3,9,16,25,49]
// console.log(numeros)

colores.push("Morado")
console.log(colores)
colores.push("Negro")
console.log(colores)
console.log(colores[1])

colores.pop()
console.log(colores)
colores.shift()
console.log(colores)

for (let i = 0; i < colores.length; i++) {
    console.log(i);
    console.log(colores[i]);
}

var raiz = numeros.map(Math.sqrt);
console.log(raiz)