let VariableH1 = document.querySelector("h1");
console.log(VariableH1.innerHTML);

let VariableArticle = document.querySelector("article");
VariableArticle.removeChild(VariableArticle.lastElementChild);

let VariableH2 = document.querySelector("h2");
VariableH2.addEventListener("click", ChangeCouleur);
function ChangeCouleur(){
    VariableH2.style.backgroundColor = 'red';
}

let VariableH3 = document.querySelector("h3");
VariableH3.addEventListener("click", CacheFont);
function CacheFont(){
    VariableH3.style.display = 'none';
}

let VariableBody = document.querySelector("body");
let VariableButton = document.createElement("button");

// VariableBody.appendChild(VariableButton);

//Afficher mon script en dessous du boutton 

/*
VariableButton.getAttribute('value');
VariableButton.setAttribute('value',"Cliquez Ici");
*/
// let VariableButton = document.querySelector("button");
VariableButton.innerHTML = "Clique ICI";

let script = document.querySelector("script");
script.parentNode.insertBefore(VariableButton, script);

VariableButton.addEventListener("click", CreerFont) 
function CreerFont(){
    let VariableParagraphe = document.getElementsByTagName("p");
    for (let paragraphe of VariableParagraphe){
        paragraphe.style.fontSize = '50px';
    }
};

let VarRandom = Math.floor(Math.random() * 100); 
VariableH1.addEventListener("mouseover", Fonth1)
function Fonth1(){
    VariableH1.style.fontSize = `${VarRandom}px`;
}



