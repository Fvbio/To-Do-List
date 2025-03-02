// IMPORTATION DU MODULE STORAGE POUR GÉRER LES TÂCHES
import Storage from "../../module/storage.js";

// SELECTIONNE LE FORMULAIRE D'AJOUT DE TACHE
const form = document.getElementById('task-form')

// ECOUTE L'EVENEMENT DE SOUMISSION DU FORMULAIRE
form.addEventListener('submit', function(e){
    e.preventDefault() // EMPÊCHE LE REFRAÎCHISSEMENT DE LA PAGE

    // RÉCUPÈRE LES VALEURS DU FORMULAIRE
    const task = document.getElementById('task').value
    const description = document.getElementById('description').value
    const status_task = document.getElementById('status_task').value
    const deadline = document.getElementById('deadline').value

    // AJOUTE LA TÂCHE ET MISE À JOUR DE L'AFFICHAGE
    Storage.setTask(task, description, status_task, deadline)
    Storage.getTask();  // AFFICHE LES TÂCHES MISES À JOUR
})

// AFFICHAGE DES TÂCHES LORS DU CHARGEMENT DE LA PAGE
window.onload = Storage.getTask;
