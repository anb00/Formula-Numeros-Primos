function num(){
var divisores;
var c = [2,4,6,8,10,12,14,16,18];

/*var zero = Cualquier num acabado en 0 no es primo */
/* var primosfijos= cualquier numero acabado en [1-3-7-9];*/
/* var loopprimos = hacer loop para sacar los primos hasta mil */
var resulta=1;
var resultb=0;
var d =parseInt(prompt("Puede Introducir un número Superior a 1..."));
if (d%2===1) {
document.write("Nº:"+d+"Con resto:"+d%2+""+"Es Correcto es un Número PRIMO.");
/*}else if (c.indexOf(d) >= 0)
{
document.write("No Es primo");*/
}
else if (d==0){
prompt("Debe ser un Número superior a 1.");
}
else if (d==isNaN){
prompt("Introduzca un Número.");

}else{
document.write("NO ES PRIMO");
}
document.write("<hr>");
document.write("<br/>");

for (x=2;x<d;) {
if (x%2===1&&x!==c&&x!==9&&x!==0) {
document.write("Nº"+x);
document.write("<br/>");
}else{
document.write("");
}
x++;
} 
}


// BUTTON
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
// FIN BUTTON 
// Titulo 
var example = document.querySelector(".example");
example.innerHTML = "Generador de Números Primos!"
example.style.color = "mistyrose";
example.style.fontSize = "30px";
example.style.textDecoration = "underline";
example.style.textalign ="right";
//fin titulo
