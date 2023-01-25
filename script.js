var inputTxtCriptografia = document.querySelector('textarea#txtAreaCriptografia');
var inputTxtDescriptografia = document.querySelector('textarea#txtAreaDescriptografia');
var codigo = document.getElementById("codigo")

var Criptografar = document.querySelector('button.btnCriptografar');
Criptografar.onclick = criptografia;

var Descriptografar = document.querySelector('button.btnDescriptografar');
Descriptografar.onclick = descriptografia;

document.getElementById('none').innerHTML = '';
inputTxtCriptografia.focus();

function criptografia() {
    
    if (inputTxtCriptografia.value.length == 0) {
        document.getElementById('none').innerHTML = '<h2> Nenhuma mensagem encontrada</h2>';
        inputTxtCriptografia.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.imgLupa').style.display = 'none';

        var text = inputTxtCriptografia.value;
        var txt =  text.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('txtAreaDescriptografia').innerHTML = `${txt}`;
       
        document.getElementById('copiaCola').innerHTML = '<button class="button btnCopiarColar" onclick="copiaCola()">Copiar</button>';
       
    }
}
function descriptografia() {
    if (inputTxtCriptografia.value.length == 0) {
        document.getElementById('none').innerHTML =  '<h2 id="none">Nenhuma mensagem encontrada</h2>';
        document.querySelector('img.imgLupa').style.display;
        inputTxtCriptografia.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.imgLupa').style.display = 'none';
        document.getElementById('txtAreaCriptografia').innerHTML = '';

        var text = inputTxtCriptografia.value;
        var txt =  text.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');

        document.getElementById('txtAreaDescriptografia').innerHTML = `${txt}`;
     
        document.getElementById('copiaCola').innerHTML = '<button class="button btnCopiarColar" onclick="copiaCola()">Copiar</button>';
    }
}

function copiaCola() {
   
    document.querySelector('#txtAreaDescriptografia').select();
    this.document.execCommand('copiaCola');
   
    codigo.innerHTML = "O texto foi copiado";
    document.querySelector("#txtAreaCriptografia").value = "";
   
}



