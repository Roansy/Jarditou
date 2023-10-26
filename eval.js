//Exercise 1

var jeunes=0;
var adultes=0;
var vieux=0;
var personnes;
do{
personnes = parseInt(window.prompt("Entrez votre age:"));
    if (personnes < 20){
        jeunes++;
            console.log(jeunes);
}
    //    personnes qui ont entre 20 et 40 ans
    else if ((personnes >=20) && (personnes <=40)){
        adultes++;
            console.log(adultes);
    //    personne qui ont entre 41 et 99 ans
    } 
    if ((personnes>=41)&& (personnes<=99)){
        vieux++;
        console.log(vieux);
    }



}while(personnes < 100);
// while = a l infinni et for pout imposer une fin
window.alert("Il y a " + "" + jeunes + "" + " jeunes\n " + "Il y a " + "" + adultes + "" + " adulte\n " + " Il y a " + "" + vieux + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");
// /n = revenir a la ligne et "" = faire un espace



// Exercise 2

n=parseInt(window.prompt("Entrez un chiffre , sil le vous plait"))

function tableMultiplication(nombre) {

 for (let i = 1; i < 13; i++) {
    //console.log(`7 x ${i} = ${7 * i}` );
     console.log(nombre + "x" +i + "=" + nombre*i);
     document.write(nombre + "x" +i + "=" + nombre*i+"<br>");
   }
}

tableMultiplication(n);



// Exercice 3
 
 var tab = ["pascal","fabrice", "andy", "margot", "logan", "jenna", "clavel", "cyril", "rayan", "mickael"];
 
 {
     var saisi = window.prompt("Veuillez choisir un prénom pascal, fabrice, andy,margot,logan,jenna,clavel,cyril,rayan,mickael. ")
     var rang = tab.indexOf(saisi);
 
 
if (rang>=0)
{
     var sup = tab.splice(rang,1);
     //sert a couper le nom choisi
     console.log(rang+sup)
   
     var nb = tab.push("");
     //remplace le nom choisi par des ""
     console.log(tab);
 
 }
 else {
     alert ("Mauvais prénom")
//  si mauvais prenom
}
}



// Exercise 4 

// Saisie du prix unitaire et de la quantité commandée

var PU = parseFloat(prompt("Entrez le prix unitaire (en €) :"));
var QTECOM = parseInt(prompt("Entrez la quantité commandée :"));

// Calcul du total

var TOT = PU * QTECOM;

// Calcul de la remise en fonction du total

var REM = 0;
if (TOT >= 100 && TOT <= 200) {
    REM = 0.05 * TOT;
} else if (TOT > 200) {
    REM = 0.10 * TOT;
}

// Calcul des frais de port

var PORT = 0;
if (TOT - REM > 500) {
    PORT = 0;
} else {
    PORT = Math.max(6, 0.02 * (TOT - REM));
}

// Calcul du prix à payer

var PAP = TOT - REM + PORT;

// Affichage des résultats Console ou avec Window alert

// console.log("Prix unitaire : " + PU + " €");
// console.log("Quantité commandée : " + QTECOM);
// console.log("Total : " + TOT.toFixed(2) + " €");
// console.log("Remise : " + REM.toFixed(2) + " €");
// console.log("Frais de port : " + PORT.toFixed(2) + " €");
// console.log("Prix à payer : " + PAP.toFixed(2) + " €");


window.alert("La remise est de "  + REM.toFixed(2) + "€\n" + "Les frais de port sont à " +PORT.toFixed(2)+ "€\n" + "Le prix total à payer est de " +PAP.toFixed(2)+ "€\n" ) ;






