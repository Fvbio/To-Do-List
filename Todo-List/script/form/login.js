import Storage from "../../module/storage.js";

const form = document.getElementById('form-login')

// ECOUTE L'EVENEMENT DE SOUMISSION DU FORMULAIRE
form.addEventListener('submit', function(e){

    e.preventDefault(); // EMPÊCHE LE REFRAÎCHISSEMENT DE LA PAGE LORS DE LA SOUMISSION DU FORMULAIRE

    // RÉCUPÈRE LES VALEURS DU NOM D'UTILISATEUR ET DU MOT DE PASSE
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    console.log(username, password) // AFFICHE LES VALEURS DANS LA CONSOLE POUR LE DÉVELOPPEUR

    // APPEL DE LA FONCTION POUR VÉRIFIER LES IDENTIFIANTS
    Storage.getUserLoggin(username, password)

})
