import { Time } from '@angular/common';

export class Annonce {
    depart : string;
    arrive : string;
    marqueVoiture: string;
    modeleVoiture : string;
    place : number;
    date: Date;
    heureDepart : Time;
    collegueId: number;

    constructor(params: any) {
        Object.assign(this, params);
    }
}