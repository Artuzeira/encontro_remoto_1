var listaDePecas = ["amortecedor", "motor", "filtro de ar"]

let peso = 100

if(peso < 100){
    console.log("Peso mínimo de 100g")
}else{
    console.log("Peso pemitido")
}

if(listaDePecas.length < 10){
    console.log("Ainda tem espaço")
}else{
    console.log("Não tem mais espaço")
}

let nomePeca = ""

if(nomePeca.length > 3){
    console.log("Nome da peça está adequado")
}else if (nomePeca.length == 0){
    console.log("Nome da peça não pode ser vazio")
}else{
    console.log("Mínimo de caracteres é de 3")
}

