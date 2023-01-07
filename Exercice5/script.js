/** 
@author: DION FIACRE ARMEL
@description: Appliquer plusieurs evenements sur le meme element
*/

/*======================== Exercice 5 =======================*/

let VariableButton = document.getElementById("bouton");
let VariableBody = document.getElementsByTagName("body")[0];
let VariableH1 = document.getElementsByTagName("h1")[0];

//Appliquer les ecouteurs sur le bouton 

VariableButton.addEventListener("click", Fonction1)
VariableButton.addEventListener("mouseover", Fonction2)
VariableButton.addEventListener("mouseout", Fonction3)
VariableButton.addEventListener("dblclick", Fonction4)


//Definir chaque fonctions

function Fonction1 (){
    VariableBody.style.backgroundColor = "red";
}

function Fonction2 (){
    VariableButton.style.backgroundColor = "blue";
}

function Fonction3 (){
    VariableButton.style.backgroundColor = "white";
}
function Fonction4 (){
    VariableH1.style.backgroundColor = "yellow";
    VariableH1.textContent = "Merci D'avoir double cliquez sur le Bouton"
}