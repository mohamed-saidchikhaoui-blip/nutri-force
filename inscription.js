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

document.getElementById('nom').addEventListener('input', function () {
    if (this.value.trim().length < 2) {
        afficherErreur('nom', 'Le nom doit contenir au moins 2 caractères.');
    } else {
        effacerErreur('nom');
    }
});

document.getElementById('prenom').addEventListener('input', function () {
    if (this.value.trim().length < 2) {
        afficherErreur('prenom', 'Le prénom doit contenir au moins 2 caractères.');
    } else {
        effacerErreur('prenom');
    }
});

document.getElementById('telephone').addEventListener('input', function () {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(this.value.trim())) {
        afficherErreur('telephone', 'Numéro invalide (10 chiffres requis).');
    } else {
        effacerErreur('telephone');
    }
});

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

document.getElementById('confirm_password').addEventListener('input', function () {
    const motDePasse = document.getElementById('password').value;
    if (this.value !== motDePasse) {
        afficherErreur('confirm_password', 'Les mots de passe ne correspondent pas.');
    } else {
        effacerErreur('confirm_password');
    }
});

formulaire.addEventListener('submit', function (evenement) {
    evenement.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const email = document.getElementById('email').value.trim();
    const motDePasse = document.getElementById('password').value;
    const confirmation = document.getElementById('confirm_password').value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTel = /^[0-9]{10}$/;

    let valide = true;

    if (nom.length < 2) {
        afficherErreur('nom', 'Le nom doit contenir au moins 2 caractères.');
        valide = false;
    }

    if (prenom.length < 2) {
        afficherErreur('prenom', 'Le prénom doit contenir au moins 2 caractères.');
        valide = false;
    }

    if (!regexTel.test(telephone)) {
        afficherErreur('telephone', 'Numéro invalide (10 chiffres requis).');
        valide = false;
    }

    if (!regexEmail.test(email)) {
        afficherErreur('email', 'Adresse email invalide.');
        valide = false;
    }

    if (motDePasse.length < 6) {
        afficherErreur('password', 'Le mot de passe doit contenir au moins 6 caractères.');
        valide = false;
    }

    if (motDePasse !== confirmation) {
        afficherErreur('confirm_password', 'Les mots de passe ne correspondent pas.');
        valide = false;
    }

    if (valide) {
        const utilisateur = { nom, prenom, telephone, email, motDePasse };
        localStorage.setItem('utilisateur', JSON.stringify(utilisateur));
        alert("Inscription réussie ! Bienvenue chez Nutri&Force.");
        window.location.href = "connexion.html";
    }
});