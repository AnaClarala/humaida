export class Covoiturage{
    depart: string;
    destination: string;
    date: Date;
    vehicule: string;
    chauffeur: string;

    constructor(depart: string, destination: string, date: Date, vehicule: string, chauffeur: string){
        this.depart = depart;
        this.destination = destination;
        this.date = date;
        this.vehicule = vehicule;
        this.chauffeur = chauffeur;
    }
}

export const listResa1: Covoiturage[] = [];
const c1 = new Covoiturage("Gare de Lyon", "Gare Saint-Lazare", new Date(), "Opel Vectra", "Compatriote Machin");
const c2 = new Covoiturage("Montpellier", "Nice", new Date(), "Mini Cooper", "Manue")
listResa1.push(c1);
listResa1.push(c2);

export const listResa2: Covoiturage[] = [];
listResa2.push(c1);
listResa2.push(c2);
listResa2.push(c1);
listResa2.push(c2);
listResa2.push(c1);
listResa2.push(c2);
listResa2.push(c1);
listResa2.push(c2);
listResa2.push(c1);
listResa2.push(c2);
listResa2.push(c1);
listResa2.push(c2);
listResa2.push(c1);
listResa2.push(c2);