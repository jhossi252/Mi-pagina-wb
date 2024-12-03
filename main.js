console.log("estoy en js")

let $resultado = document.getElementById("resul")
function fSumar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    //console.log(typeof(num1))
    $resultado.innerHTML = "la suma es:"+(num1+num2)

    console.log(resultado)
}
function fRestar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML  = "la resta es:"+(num1-num2)
}
function fMultiplicar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML  = "la multiplicacion es: "+(num1*num2)
}
function fDividir(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    if(num2===0)
    {$resultado.innerHTML = "la division entre (0) no es posible"}
    else{ $resultado.innerHTML = "la division es:"+(num1/num2) }
}
