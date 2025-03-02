import Storage from "../../module/storage.js";

const form = document.getElementById('signup-form')

// ECOUTE L'EVENEMENT DE SOUMISSION DU FORMULAIRE
form.addEventListener('submit', function(e){

    // RÉCUPÈRE LES VALEURS DU NOM D'UTILISATEUR ET DU MOT DE PASSE
    const username = document.getElementById('username').value
    const passwords = document.getElementById('password').value

    // VÉRIFIE SI L'UTILISATEUR N'EXISTE PAS DÉJÀ
    if(!Storage.getUser(username)){
        // SI L'UTILISATEUR N'EXISTE PAS, AJOUTE LE NOUVEAU COMPTE
        Storage.setUser(username, passwords)
    }else{
        // SI L'UTILISATEUR EXISTE DÉJÀ, AFFICHE UN MESSAGE D'ERREUR
        console.log("L'identifiant existe déjà")
    }
})
