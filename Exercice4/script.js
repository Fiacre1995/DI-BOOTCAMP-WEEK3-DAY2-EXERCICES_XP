/** 
@author: DION FIACRE ARMEL
@description: Entrer la valeur du rayon et retourner le volume d'une sphere
*/

/*======================== Exercice 4 =======================*/

let VarInput1 = document.forms[0].radius;
let VarInput2 = document.forms[0].volume;

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", Envoyer)

function Envoyer(e){

    e.preventDefault();

    if(VarInput1.value === ''){
        //Conditions non respecter
        alert("Veuillez saisir tous les champs")

    }
    else
    {
        //Calcule et Affichage du volume
        let volume = (4 / 3) * 3.14 * (VarInput1.value * VarInput1.value * VarInput1.value); 
        console.log(volume);
        VarInput2.value = volume;

    }
}