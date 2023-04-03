class Pokemon {
    constructor(nom, numero, taille, poids, type, pointsDeVie, attaque1, attaque2) {
      this.nom = nom;
      this.numero = numero;
      this.taille = taille;
      this.poids = poids;
      this.type = type;
      this.pointsDeVie = pointsDeVie;
      this.attaque1 = attaque1;
      this.attaque2 = attaque2;
    }

    eleminer(adversaire) {
        let v = adversaire.pointsDeVie;
        while (v>0) {
            console.log(`début attaque`);
            if (v>0.2*adversaire.pointsDeVie){
                console.log(`${this.nom} attaque ${adversaire.nom} avec ${this.attaque1.libelle} et inflige ${this.attaque1.degats} points de dégâts.`);
                v -= this.attaque1.degats;
                console.log(`${this.nom} a ${this.pointsDeVie} Points de vie Tandis que ${adversaire.nom} lui reste ${v} Points de vie`);
            }else{
                console.log(`${this.nom} attaque ${adversaire.nom} avec ${this.attaque2.libelle} et inflige ${this.attaque2.degats} points de dégâts.`);
                v -= this.attaque2.degats;
                console.log(`${this.nom} a ${this.pointsDeVie} Points de vie Tandis que ${adversaire.nom} lui reste ${v} Points de vie`);
            }
            console.log(`fin d'attaque`);
        }
    }



    attaquer(adversaire) {
        
        let attaque = this.pointsDeVie <= this.pointsDeVie*0.2 ? this.attaque2 : this.attaque1;
        let degats = attaque.degats;
        if (Math.random() < 0.1) {
          console.log("Coup critique !");
          degats *= 2;
        }
        adversaire.pointsDeVie -= degats;
        console.log(`${this.nom} utilise ${attaque.libelle} pour attaquer ${adversaire.nom}, se dernier lui reste ${adversaire.pointsDeVie}`);
    }
}