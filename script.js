// Références aux éléments HTML du formulaire et du conteneur de sortie
const playerProfileForm = document.getElementById('playerProfileForm');
const playerOutputCard = document.getElementById('playerOutputCard');
const playerProfileContainer = document.querySelector('.player-profile-container'); // La section parente du profil

// Écouteur d'événement pour la soumission du formulaire
playerProfileForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // 1. Récupérer les valeurs des champs du formulaire
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();
    const nationality = document.getElementById('nationality').value.trim();
    const position = document.getElementById('position').value.trim();
    const favoriteClub = document.getElementById('favoriteClub').value.trim();
    const favoritePlayer = document.getElementById('favoritePlayer').value.trim();
    const dreamTeam = document.getElementById('dreamTeam').value.trim();
    const personality = document.getElementById('personality').value.trim();
    const photoUrl = document.getElementById('photoUrl').value.trim();

    // 2. Créer un objet joueur avec les données saisies
    const player = {
        firstName: firstName || "Joueur Inconnu", // Utilise une valeur par défaut si le champ est vide
        lastName: lastName || "",
        age: age || "N/A",
        nationality: nationality || "N/A",
        position: position || "Non spécifié",
        favoriteClub: favoriteClub || "Non spécifié",
        favoritePlayer: favoritePlayer || "Non spécifié",
        dreamTeam: dreamTeam || "Aucune équipe de rêve saisie.",
        personality: personality || "Aucune description de personnalité.",
        // Utilise l'URL saisie ou une image par défaut si le champ est vide
        photo: photoUrl || "https://via.placeholder.com/150/CCCCCC/FFFFFF?text=PHOTO"
    };

    // 3. Afficher les informations dans la carte de profil de sortie
    displayPlayerProfile(player);

    // 4. Afficher la section du profil
    playerProfileContainer.style.display = 'block';

    // Optionnel: Faire défiler la page jusqu'au profil affiché
    playerProfileContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Fonction pour afficher les informations d'un objet joueur donné
function displayPlayerProfile(playerData) {
    playerOutputCard.innerHTML = `
        <img src="${playerData.photo}" alt="Photo de ${playerData.firstName} ${playerData.lastName}">
        <h2>${playerData.firstName} ${playerData.lastName}</h2>
        <div class="details-grid">
            <p><strong>Poste :</strong> ${playerData.position}</p>
            <p><strong>Âge :</strong> ${playerData.age} ans</p>
            <p><strong>Club Préféré :</strong> ${playerData.favoriteClub}</p>
            <p><strong>Nationalité :</strong> ${playerData.nationality}</p>
            <p><strong>Joueur Préféré :</strong> ${playerData.favoritePlayer}</p>
            <p><strong>Équipe de Rêve :</strong></p>
        </div>
        <p class="personality-bio"><strong>Personnalité :</strong> ${playerData.personality}</p>
        <p class="dream-team-list">${playerData.dreamTeam}</p>
    `;
}

// Au chargement initial, on s'assure que la section du profil est bien masquée
document.addEventListener('DOMContentLoaded', () => {
    playerProfileContainer.style.display = 'none';
});