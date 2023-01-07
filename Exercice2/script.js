/** 
@author: DION FIACRE ARMEL
@description: Entrer la valeur du rayon et retourner le volume d'une sphere
*/

/*======================== Exercice 2 =======================*/

let VariableForm = document.forms[0];
console.log(VariableForm);

let input1 = document.getElementById("fname");
let input2 = document.getElementById("lname");
console.log(input1);
console.log(input2);

let VarInput1 = document.forms[0].fname;
let VarInput2 = document.forms[0].lname;
console.log(VarInput1);
console.log(VarInput2);

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", Envoyer)

function Envoyer(e){
    e.preventDefault();
    if(input1.value === '' || input2.value === ''){
        alert("Veuillez saisir tous les champs")
    }else{
        console.log(input1.value);
        console.log(input2.value);
    }
}

let VariableUl = document.querySelector("ul");
let CreerLi1 = document.createElement("li");
let CreerLi2 = document.createElement("li");

VariableUl.appendChild(CreerLi1);
VariableUl.appendChild(CreerLi2);

let retourne1 = document.getElementsByTagName("li")[0].value = "nom";
let retourne2 = document.getElementsByTagName("li")[1].value = "prenom";
console.log(retourne1);
console.log(retourne2);