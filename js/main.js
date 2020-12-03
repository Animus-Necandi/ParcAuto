
//Programme principal du parc Auto

let statutAssurance = null
let saisie = null

// Instanciation d'un objet
const camaro = new Car(`BF-560-BG`, `Jaune`, 1769, 455, 72, 5);

console.log(camaro.getMessage());

console.log(`
            INFORMATIONS VEHICULE: Camaro

    Sa plaque d'immatriculation est: ${camaro.registration}    
    De couleur: ${camaro.color} 
    Poid à vide (en Kg): ${camaro.weight} 
    Puissance (en ch): ${camaro.power} 
    Capacité du réservoir (en Litres): ${camaro.tankCapacity} 
    Niveau d\'essence (en Litres): ${camaro.petrolLevel} 
    Nombre de places: ${camaro.numberOfPlaces}
    Votre véhicule n'est pas assuré`);

const menu = function () {

    if (!camaro.assure) { statutAssurance = 'non assuré' } else { statutAssurance = 'assuré(e)' }
    console.log(`
                     MENU

1. Pour changer la couleur de votre véhicule
2. Pour mettre de l'essence
3. Pour vous assurer (vous êtes actuellement ${statutAssurance})
4. Pour partir!
5. Info Véhicule
6. Pour quitter le parc Auto

`)

    while (saisie != 6) {
        saisie = prompt('Entrer le chiffre correspondant au Menu auquel vous souhaitez accéder')
        console.log(`Choix: ${saisie}`)

        if (saisie > 0 && saisie <= 6) {
            switch (saisie) {

                case '1':
                    let newColor = prompt(`Saisir la couleur:`)
                    console.log(`Vous avez saisi la couleur: ${newColor}`)
                    console.log(camaro.repaint(newColor))
                    break;

                case '2':
                    let extra = parseInt(prompt(`
                    Vous avez ${camaro.petrolLevel}L dans le réservoir pour une capacité de ${camaro.tankCapacity}L. 
                    Combien de litres souhaitez-vous ajouter?`))

                    console.log(`Vous souhaitez ajouter ${extra}L`)
                    console.log(camaro.tankUp(extra))

                    break;

                case '3':
                    if (!camaro.assure) {
                        camaro.assure = true;
                        console.log('Vous pouvez prendre la route sereinement car votre assurance est activée!')
                    } else {
                        console.log('Vous êtes déja assuré!')
                    }
                    break;

                case '4':
                    if (camaro.assure) {
                        let traveldDistance = parseInt(prompt('Entrez la distance que vous avez parcourue en Km'))
                        let speedAverage = parseInt(prompt('Entrez votre vitesse moyenne en Km/h:'))

                        console.log(`Vous avez saisi ${traveldDistance} Km`)
                        console.log(`Vous avez saisi ${speedAverage} Km/h`)
                        console.log(camaro.move(traveldDistance, speedAverage));

                    } else {
                        console.error(`Veuillez vous assurer avant de partir!`)
                    }
                    break;

                case '5': console.log(camaro.toString());
                    break;

                case '6': console.log(`
                        Merci d'avoir utilisé notre programme!
                        La ligue du Code vous salue bien!`);
            }
        }
        else {
            console.error('Vous devez entrer un nombre entre 1 et 6!');

        }
    }
}

menu();
