const pikachu = new Pokemon(
    "Pikachu",
    25,
    "40 cm",
    "6 kg",
    "électrique",
    82,
    new Attaque("statik", 10),
    new Attaque("paratonnerre", 25)
);
  
const evoli = new Pokemon(
    "Evoli",
    133,
    "30 cm",
    "6.5 kg",
    "normal",
    70,
    new Attaque("adaptabilité", 9),
    new Attaque("anticipation", 15)
);

let premierAttaquant = Math.random() < 0.5 ? pikachu : evoli;
console.log(`Le combat commence entre ${pikachu.nom} et ${evoli.nom}.`);
console.log(`Le premier attaquant est ${premierAttaquant.nom}.`);

while (pikachu.pointsDeVie > 0 && evoli.pointsDeVie > 0) {
  let attaquant = premierAttaquant;
  let defenseur = attaquant === pikachu ? evoli : pikachu;
  attaquant.attaquer(defenseur);
  if (defenseur.pointsDeVie <= 0) {
    console.log(`${defenseur.nom} est KO !`);
    break;
  }
  [attaquant, defenseur] = [defenseur, attaquant];
  premierAttaquant = attaquant;
}

let vainqueur = pikachu.pointsDeVie <= 0 ? evoli : pikachu;
console.log(`Le vainqueur est ${vainqueur.nom} avec ${vainqueur.pointsDeVie} points de vie restants !`);