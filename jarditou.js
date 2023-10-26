// //5 === 5; // true (même valeur et même type, à savoir des nombres)
// "Hello" === "Hello"; // true (même valeur et même type, à savoir des chaînes de caractères)
// true === true; // true (même valeur et même type, à savoir des booléens)
// null === null; // true (même valeur et même type, à savoir null)
// undefined === undefined; // true (même valeur et même type, à savoir undefined)

// 5 === "5"; // false (même valeur, mais types différents, un nombre et une chaîne de caractères)
// true === 1; // false (même type, mais valeurs différentes)
// null === undefined; // false (types différents, null et undefined)


function validerFormulaire() {
  var erreur = false;

  // Validation du nom
  var nom = document.getElementById("nom").value;
  if (nom === "") {
    document.getElementById("erreur").textContent = "Le champ nom est obligatoire";
    erreur = true;
  } else {
    document.getElementById("erreur").textContent = "";
  }

  // Validation du prénom
  var prenom = document.getElementById("prenom").value;
  if (prenom === "") {
    document.getElementById("erreur1").textContent = "Le champ prénom est obligatoire";
    erreur = true;
  } else {
    document.getElementById("erreur1").textContent = "";
  }

  // Validation du sexe
  var sexe_f = document.getElementById("sexe_f").checked;
  var sexe_m = document.getElementById("sexe_m").checked;
  if (!sexe_f && !sexe_m) {
    document.getElementById("erreursexe").textContent = "Veuillez sélectionner votre sexe";
    erreur = true;
  } else {
    document.getElementById("erreursexe").textContent = "";
  }

  // Validation de la date de naissance
  var dob = document.getElementById("dob").value;
  if (dob === "") {
    document.getElementById("erreur2").textContent = "Le champ date de naissance est obligatoire";
    erreur = true;
  } else {
    document.getElementById("erreur2").textContent = "";
  }

  // Validation du code postal
  var cp = document.getElementById("cp").value;
  if (cp === "") {
    document.getElementById("erreur3").textContent = "Le champ code postal est obligatoire";
    erreur = true;
  } else {
    document.getElementById("erreur3").textContent = "";
  }

  // Validation de l'email
  var email = document.getElementById("email").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("erreur4").textContent = "L'adresse email n'est pas valide";
    erreur = true;
  } else {
    document.getElementById("erreur4").textContent = "";
  }

  // Validation du sujet
  var sujet = document.getElementById("sujet").value;
  if (sujet === "") {
    document.getElementById("erreur5").textContent = "Veuillez sélectionner un sujet";
    erreur = true;
  } else {
    document.getElementById("erreur5").textContent = "";
  }

  // Validation de la question
  var question = document.getElementById("question").value;
  if (question === "") {
    document.getElementById("erreur6").textContent = "Le champ question est obligatoire";
    erreur = true;
  } else {
    document.getElementById("erreur6").textContent = "";
  }

  // Validation de l'acceptation des conditions
  var checked = document.getElementById("check").checked;
  if (!checked) {
    document.getElementById("erreur7").textContent = "Vous devez accepter les conditions";
    erreur = true;
  } else {
    document.getElementById("erreur7").textContent = "";
  }

  // Soumettre le formulaire si tout est valide
  return !erreur;
}
