function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://www.globo.com/"); //abre em outra aba
    //window.location.href="https://www.globo.com/" //abre na msm guia
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse"
    //alert("Obrigado!")
    elemento.innerHTML ="Obrigado por passar o mouse"
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma (n1, n2){
    return n1+n2
}

function setReplace (frase, nome, novo_nome){
    return frase.replace (nome, novo_nome)
}

var validar = 0;
function validaIdade (idade){
    validar
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt ("Qual sua idade?");
validaIdade(idade)
console.log(validar);



alert (soma(5,10));
alert (setReplace("Vai Japão", "Japão", "Brasil"));


var d = new Date();
console.log("Hoje é " + d.getDate() + "/" + d.getMonth()+1);// getDate retorna o dia correto e getMonth()+1) para retornar mes correto
alert(d.getDay());//retorna o dia da semana em inteiro domingo 0 segunda 1 e assim em diante


var count
for (count = 0; count <= 5; count++){
    alert(count)
}


var count = 0;
while (count < 5){
    console.log(count);
    count++;
}


var idade = prompt ("Qual sua idadae?");
//var idade = 18;
if (idade => 18){
    alert("Maior de idade")
}
else {
    alert("Menor de idade")
}


var frutas = [{nome:"maça", cor:"vermelha"},
{nome:"uva", cor:"roxa"}, {nome:"banana", cor:"amarela"}]
console.log(frutas);
alert(frutas[2].nome);


var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor)


var lista = ["maça", "pera", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.join(" - "));


var nome = "Guilherme de Moraes";
var idade = 21;
var idade2 = 10;
var frase = "Eu não te amo"
alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(idade);
console.log(idade+idade2);
console.log(frase.toUpperCase());
console.log(frase.replace("não, """));
*/
