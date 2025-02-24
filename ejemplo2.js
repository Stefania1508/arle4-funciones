let a = 3
let b = 2
a += 2
function procesar1(n){
    return a + n
} 

function procesar2(x){
    return b * x
}

console.log (procesar1(procesar2(3)+3))