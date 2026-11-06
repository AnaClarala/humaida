import { Time } from '@angular/common';
import { Collegue } from '../auth/auth.domains';

export class Covoiturage{
    id?: number;
    depart: string;
    arrive: string;
    date: Date;
    heureDepart: Time;
    marqueVoiture: string;
    modeleVoiture: string;
    place?: number;
    collegue: Collegue;
    passager?: Collegue[];

    constructor(depart: string, arrive: string, date: Date, heureDepart: Time, marqueVoiture: string, modeleVoiture: string, collegue: Collegue){
        this.depart = depart;
        this.arrive = arrive;
        this.date = date;
        this.heureDepart = heureDepart;
        this.marqueVoiture = marqueVoiture;
        this.modeleVoiture = modeleVoiture;
        this.collegue = collegue;
    }

    

}
