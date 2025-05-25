export class Annonce {
    depart : string;
    arrive : string;
    marqueVoiture: string;
    modeleVoiture : string;
    place : number;
    date: Date;
    heureDepart : string;
    collegueId: number;

    constructor(params: any) {
        Object.assign(this, params);
    }
}