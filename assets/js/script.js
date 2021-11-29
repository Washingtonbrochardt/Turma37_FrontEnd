/* 
var= Variavel global
let= Variavel local
const= Variavel contstante e global



Case Sensitive = Reconhece letras maiusculas e minusculas

por Tag= GetElementByTagName()
por Id= GetElementById()
por Nome= GetElementByName()
por Class= GetElementByClassName()
por selector= querySelector()
*/

let nome= window.document.getElementById("nome")
let email= document.querySelector("#email")
let  assunto= document.querySelector("#assunto")
let nomeOk= false
let emailOk= false
let assuntoOk= false
let mapa = document.querySelector("#mapa")

nome.style.width= "100%"
email.style.width= "100%"
assunto.style.width= "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3 ){
        txtNome.innerHTML = "Nome invalido"
        txtNome.style.color = "red"
    }
    else{
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color = "#7fdd0a"
        nomeOk= true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Email invalido"
        txtEmail.style.color = "red"
    }
    else{
        txtEmail.innerHTML = "Email valido"
        txtEmail.style.color = "#7fdd0a"
        emailOk= true
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length > 100 ){
        txtAssunto.innerHTML = "Digite no maximo 100 caracteres"
        txtAssunto.style.backgroundColor = "red"
        txtAssunto.style.display = "block"
    }
    else{
        txtAssunto.style.display = "none"
        assuntoOk= true
    }

}
function enviar(){
    if (nomeOk==true && emailOk==true && assuntoOk==true){
        alert("Formulario enviado com sucesso")
    }
    else{
        alert("Preencha o formulario corretamente antes de enviar")
    }
}
function mapaZoom(){
    mapa.style.width= "800px"
    mapa.style.height= "600px"
}
function mapaNormal(){
    mapa.style.width= "400px"
    mapa.style.height= "250px"
}