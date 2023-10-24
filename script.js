var validation = document.getELEMENTBYID('bouton_envoi');
var prenom = document.getELEMENTBYID('prenom');
var prenom_m = document.getELEMENTBYID('prenom_manquant');
validation.addeventlistener('click', f_valid);


function f_valid(e){
    if (prenom.validity.valuemissing) {
       e.preventdefautl();
       prenom_m.textcontent = 'prenom manquant'; 
       prenom_m.style.color = 'red';
    }
}


