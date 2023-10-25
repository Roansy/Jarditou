var validation = document.getELEMENTBYID('bouton_envoi');
var prenom = document.getELEMENTBYID('prenom');
var prenom_m = document.getELEMENTBYID('prenom_manquant');
var prenom_v = /^[a-zA-ZéèîïÉÈÎÏ] [a-zéèeàçîï]+([-'\s'][a-zA-ZéèîïÉÈÎÏ][a-zéèeàçîï]+)?/; 
validation.addeventlistener('click', f_valid);


function f_valid(e){
    if (prenom.validity.valuemissing) {
       e.preventdefautl();
       prenom_m.textcontent = 'prenom manquant'; 
       prenom_m.style.color = 'red';
    }else if (prenom_v.test(prenom.value) == false){
        event.preventDefault();
        prenom_m.testcontent = 'format incorrect';
    }
}


