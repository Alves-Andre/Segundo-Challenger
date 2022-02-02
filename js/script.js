document.getElementById("cinco").onclick = function() {selecionar("cinco")};
document.getElementById("dez").onclick = function() {selecionar("dez")};
document.getElementById("quinze").onclick = function() {selecionar("quinze")};
document.getElementById("vinte").onclick = function() {selecionar("vinte")};
document.getElementById("cinquenta").onclick = function() {selecionar("cinquenta")};
document.getElementById("custom").onclick = function() {selecionar("custom");}
document.getElementById("custom").value = "Custom";
document.getElementById("custom").onclick = function() {mudartipo()}
function selecionar(idi) {
    if (document.getElementById(idi).style.color == "rgb(94, 122, 125)"){
        document.getElementById(idi).style.backgroundColor="hsl(183, 100%, 15%)";
        document.getElementById(idi).style.color="white";
    }
    else{
        var lista = document.getElementsByClassName("botoes");
        for (let i = 0; i < lista.length-1; i++){
            if (lista[i].id != idi){
                document.getElementById(lista[i].id).style.backgroundColor="hsl(183, 100%, 15%)";
                document.getElementById(lista[i].id).style.color="white";
            }
        }
        document.getElementById("custom").type = 'text';
        document.getElementById("custom").value = "Custom";
        if (idi != "custom"){
            document.getElementById(idi).style.backgroundColor="hsl(172, 67%, 45%)";
            document.getElementById(idi).style.color="hsl(186, 14%, 43%)";
        }
    }  
} 
function mudartipo(){
    document.getElementById("custom").type = 'number';
    var lista = document.getElementsByClassName("botoes");
    for (let i = 0; i < lista.length-1; i++){
        document.getElementById(lista[i].id).style.backgroundColor="hsl(183, 100%, 15%)";
        document.getElementById(lista[i].id).style.color="white";
    }
}
function calcular(){
    var conta = document.getElementById("entrada").value;
    var pessoas = document.getElementById("qtdpeople").value;
    var lista = document.getElementsByClassName("botoes");
    for (let i = 0; i < lista.length; i++){
        if (document.getElementById(lista[i].id).style.color=="rgb(94, 122, 125)"){
            var percento = lista[i].value;
        }
        else if (document.getElementById("custom").type=="number"){
            var percento = document.getElementById("custom").value;
        }
    }
    var gorgeta = (conta*percento/100);
    var resultadopessoa = (gorgeta/pessoas);
    var resultadototal = parseFloat(((conta/pessoas)+resultadopessoa));
    var resultadototal = resultadototal;
    document.getElementById("personresult").innerHTML = resultadopessoa.toFixed(2);
    document.getElementById("amountresult").innerHTML = resultadototal.toFixed(2);
}