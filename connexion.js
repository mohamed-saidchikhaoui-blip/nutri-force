const formulaire = document.querySelector('form');

function afficherErreur(id, message) {
    const champ = document.getElementById(id);
    let erreur = champ.parentElement.querySelector('.erreur-msg');

    if (!erreur) {
        erreur = document.createElement('span');
        erreur.classList.add('erreur-msg');
        erreur.style.color = 'red';
        erreur.style.fontSize = '0.85em';
        champ.parentElement.appendChild(erreur);
    }

    erreur.textContent = message;
    champ.style.borderColor = 'red';
}

function effacerErreur(id) {
    const champ = document.getElementById(id);
    const erreur = champ.parentElement.querySelector('.erreur-msg');
    if (erreur) erreur.textContent = '';
    champ.style.borderColor = '';
}

document.getElementById('email').addEventListener('input', function () {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(this.value.trim())) {
        afficherErreur('email', 'Adresse email invalide.');
    } else {
        effacerErreur('email');
    }
});

document.getElementById('password').addEventListener('input', function () {
    if (this.value.length < 6) {
        afficherErreur('password', 'Le mot de passe doit contenir au moins 6 caractères.');
    } else {
        effacerErreur('password');
    }
});

formulaire.addEventListener('submit', function (evenement) {
    evenement.preventDefault();

    const email = document.getElementById('email').value.trim();
    const motDePasse = document.getElementById('password').value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valide = true;

    if (!regexEmail.test(email)) {
        afficherErreur('email', 'Adresse email invalide.');
        valide = false;
    }

    if (motDePasse.length < 6) {
        afficherErreur('password', 'Le mot de passe doit contenir au moins 6 caractères.');
        valide = false;
    }

    if (valide) {
        const donnees = localStorage.getItem('utilisateur');

        if (!donnees) {
            alert("Aucun compte trouvé. Veuillez vous inscrire.");
            window.location.href = "inscription.html";
            return;
        }

        const utilisateur = JSON.parse(donnees);

        if (email !== utilisateur.email || motDePasse !== utilisateur.motDePasse) {
            alert("Email ou mot de passe incorrect.");
            return;
        }

        alert("Connexion réussie ! Bienvenue " + utilisateur.prenom + " !");
        window.location.href = "index.html";
    }
});