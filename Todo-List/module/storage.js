const Storage = {

    // AJOUT NOUVEAU UTILISATEUR
    setUser(username, password) {

        // LES 2 VARIABLES DOIVENT ETRE REMPLIES
        if (username && password) {
            const new_user = { "username": username, "password": password, "tasks": [] }

            // RECUPERE LA LISTE DES UTILISATEURS OU CREER UNE NOUVELLE LISTE SI INEXISTANTE
            let users = JSON.parse(localStorage.getItem("users")) || []

            users.push(new_user)

            // STOCK LES NOUVEAUX UTILISATEURS
            localStorage.setItem("users", JSON.stringify(users))

            console.log("Operation Reussie")
        } else {
            console.log("Operation Echouée")
            return 0
        }
    },

    // RECUPERE UN UTLISATEUR OU LA LISTE DES UTILISATEURS 
    getUser(user_name = undefined) {
        const users = JSON.parse(localStorage.getItem("users")) || []

        if (user_name) {
            const user_exist = users.find(user => user.username === user_name)

            if (user_exist) {
                //  RETOURNE LE NOM DE L UTILISATEUR
                return user_exist.username
            } else {
                // RETOURNE FAUX UTILISATEUR INTROUVABLE
                return 0
            }
        } else {
            console.log("LISTE USERS:", users)
        }
    },

    // RECUPERE LES IDENTIFIANTS
    getUserLoggin(user_name = undefined, password = undefined) {

        const users = JSON.parse(localStorage.getItem("users")) || []

        // CHERCHE IDENTIFIANT/MDP DANS LA LISTE UTILISATEURS
        let user = users.find(user => user.username === user_name && user.password === password)

        // SI IDENTIFIANTS TROUVEE
        if (user) {
            console.log("Identifiant Correct")

            // STOCKAGE DU UTILISATEUR IDENTIFIE DANS UN STORAGE
            localStorage.setItem("current-user", JSON.stringify(user.username))

            window.location.href = "./../dash/dashboard.html"

        } else {
            // SI IDENTIFIANTS NON TROUVEES
            console.log("Identifiant Incorrect")
            return 0
        }
    },

    // RECUPERE LES TACHES DE L'UTILISATEUR CONNECTE
    getTask() {
        const users = JSON.parse(localStorage.getItem("users")) || [];
    
        const current_user = JSON.parse(localStorage.getItem("current-user"))
        const user = users.find(user => user.username === current_user);
    
        const taskListDiv = document.getElementById("task-list");
    
        if (user) {
            if (user.tasks.length > 0) {
                // SI L'UTILISATEUR A DES TACHES, LES AFFICHER
                taskListDiv.innerHTML = "";  // Vider la liste avant d'afficher les tâches
    
                user.tasks.forEach(task => {
                    const taskElement = document.createElement("div");
                    taskElement.classList.add("task-item");
                    taskElement.innerHTML = `
                        <h3>${task.titre}</h3>
                        <p>Description: ${task.description} |
                        Status: ${task.status} |
                        Deadline: ${task.deadline}</p>
                    `;
                    taskListDiv.appendChild(taskElement);
                });
            } else {
                // SI L'UTILISATEUR N'A PAS DE TACHES
                taskListDiv.innerHTML = "<p>Aucune tâche à afficher.</p>";
            }
        } else {
            // RETOURNE FAUX UTILISATEUR INTROUVABLE
            console.log("Utilisateur non trouvé.");
        }
    },

    // AJOUTE UNE NOUVELLE TACHE A L'UTILISATEUR
    setTask(titre, description, status_task, deadline) {

        // RECUPERE L'UTILISATEUR CONNECTE
        const current_user = JSON.parse(localStorage.getItem("current-user"));

        // RECUPERE LA LISTE DES UTILISATEURS
        const users = JSON.parse(localStorage.getItem("users"));

        console.log(current_user)

        // RECHERCHE L'UTILISATEUR CONNECTE DANS LA LISTE DES UTILISATEURS
        let user = users.find(user => user.username === current_user);

        if (user) {
            // CREER UNE NOUVELLE TACHE
            const newTask = {
                titre: titre,
                description: description,
                status: status_task,
                deadline: deadline
            };

            // AJOUTE LA NOUVELLE TACHE A L'UTILISATEUR
            user.tasks.push(newTask);

            // SAUVEGARDE LES UTILISATEURS MIS A JOUR DANS LOCAL STORAGE
            localStorage.setItem("users", JSON.stringify(users));

            console.log("Tâche ajoutée avec succès.");
        } else {
            // RETOURNE FAUX UTILISATEUR INTROUVABLE
            console.log("Utilisateur non trouvé.");
        }

        // AFFICHE LES UTILISATEURS DANS LOCAL STORAGE
        console.log(localStorage.getItem("users"))
    }
    
    
}

export default Storage;
