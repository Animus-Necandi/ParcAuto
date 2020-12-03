//Classe Car
class Car {
    constructor(registration, color, weight, power, tankCapacity, numberOfPlaces) {
        this.registration = registration;
        this.color = color;
        this.weight = weight;
        this.power = power;
        this.tankCapacity = tankCapacity;
        this.numberOfPlaces = numberOfPlaces;
        this.petrolLevel = 5;
        this.assure = false;
        this.dashBoardMessage = `Bienvenue sur le tableau de bord de votre véhicule`;
    }

    //Message d'accueil du tableau de bord
    getMessage() {
        return this.dashBoardMessage;
    }

    //méthode repaint
    repaint(newColor) {
        if (newColor != this.color) {
            this.color = newColor;
            return "Merci, votre nouvelle couleur de voiture est mise à jour";
        } else {
            return "Merci pour ce raffraichissement";
        }
    }

    //méthode tankUp
    tankUp(extra) {
        if (this.tankCapacity >= this.petrolLevel + extra) {
            this.petrolLevel = this.petrolLevel + extra;
            return `Votre nouveau niveau d\'essence est de : ${this.petrolLevel}  L`;
        } else {
            return `Votre appoint est trop élevé`;
        }
    }

    //méthode move
    move(traveldDistance, speedAverage) {
        let fuelConsumption = 0;

        if (speedAverage <= 50) {
            fuelConsumption = traveldDistance / 10;
        } else if (51 <= speedAverage && speedAverage <= 90) {
            fuelConsumption = (traveldDistance / 100) * 5;
        } else if (91 <= speedAverage && speedAverage <= 130) {
            fuelConsumption = (traveldDistance / 100) * 8;
        } else if (131 <= speedAverage) {
            fuelConsumption = (traveldDistance / 100) * 12;
        }
        let possibleDistance = (this.petrolLevel / fuelConsumption) * 100;

        if (traveldDistance >= possibleDistance) {
            return `Vous n\'avez pas assez d\'essence pour effectuer ce trajet`;
        } else {
            this.petrolLevel = this.petrolLevel - fuelConsumption;
            return `Vous avez consommé ${fuelConsumption}L, il vous reste ${this.petrolLevel}L dans votre réservoir`;
        }
    }

    //méthode toString()
    toString() {
        return `
                       FICHE D'INFORMATIONS:

    Sa plaque d'immatriculation est: ${this.registration.toUpperCase()}
    De couleur: ${this.color}
    Puissance (en ch): ${this.power}`;
    };

}
