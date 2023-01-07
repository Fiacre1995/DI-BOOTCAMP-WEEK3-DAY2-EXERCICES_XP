let allBoldItems ="";

let VariableStrong = document.getElementsByTagName("strong");
let VariableP = document.getElementsByTagName("p")[0];


VariableP.addEventListener("mouseover", highlight)
VariableP.addEventListener("mouseout", return_normal)

function getBold_items(){

    for(let gras of VariableStrong){
        console.log(gras);
        allBoldItems = allBoldItems + " " + gras.textContent;
        console.log(allBoldItems);
        
    }

}

getBold_items();

function highlight(){

    VariableP.style.color = "blue";
    VariableP.style.fontWeight = "bold";
}

function return_normal(){

    VariableP.style.color = "black";
    VariableP.style.fontWeight = "bold";
}