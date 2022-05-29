

var areaTexto=""

 function Codificar() {

	areaTexto= document.getElementById('valor').value;
document.getElementById('textoCodificado').innerHTML=areaTexto.replace(/e|i|a|o|u/g, function (x) {

						if (x=="e") {return "enter"}
						else if (x=="a") {return "ai"}
						else if (x=="o") {return "ober"}
						else if (x=="u") {return "ufat"}
						else if (x=="i") {return "imes"}})}

function copiar () {const conteudo = document.querySelector("#textoCodificado");
					const copybutton= document.getElementById ("botao");
					conteudo.select();
					document.execCommand('copy');
						alert("Copiado!");}

var txtCifrado= ""

function Descodificar() {txtCifrado=document.getElementById('valor').value;
document.getElementById ("textoCodificado").innerHTML=txtCifrado.replace(/imes|enter|ai|ober|ufat/g, function (x)
						
						{if (x=="imes") {return "i"}	
						else if (x=="ai") {return "a"}
						else if (x== "ober") {return "o"}
						else if (x== "ufat") {return "u"}
						else if (x== "enter") {return "e"}



})}






