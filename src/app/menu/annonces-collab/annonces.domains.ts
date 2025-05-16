export class Annonce {
    depart : string;
    destination : string;
    immatriculation : string;
    marque : string;
    modele : string;
    nbPlacesDispos : number;
    dateHoraire : Date;

    constructor(params: any) {
        Object.assign(this, params);
    }
}