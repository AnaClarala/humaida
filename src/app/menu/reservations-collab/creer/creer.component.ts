import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Covoiturage } from 'src/app/mock/mock-reservations';
import { AdressesService } from 'src/app/services/adresses.service';
import { ReservationCollabService } from '../reservations-collab.service';


@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.scss']
})
export class CreerComponent implements OnInit {
  model: NgbDateStruct;
  covoitDeroule = true;
  societeDeroule = false;
  chauffeurDeroule = false;
  list: Covoiturage[] = [];
  listHist: Covoiturage[] = [];
  p: number = 1;
  today = new Date();

  depart: string;
  listAdresse: string[];

  constructor(private adressesSrv: AdressesService, private dataSrv: ReservationCollabService) { }

  ngOnInit(): void {
  }

  deroulerCovoit(){
    this.chauffeurDeroule = false;
    this.societeDeroule = false;
    this.covoitDeroule = true;
  }

  deroulerChauffeur(){
    this.chauffeurDeroule = true;
    this.societeDeroule = false;
    this.covoitDeroule = false;
  }

  deroulerSociete(){
    this.chauffeurDeroule = false;
    this.societeDeroule = true;
    this.covoitDeroule = false;
  }

  afficherListe(){
    this.adressesSrv.getAdresseBDD(this.depart).subscribe(data => { 
      const tableAdresses: string[] =[];
      data.features.forEach(element => {
        tableAdresses.push(element.properties.name+", "+element.properties.postcode+" "+element.properties.city);
      });
      this.listAdresse=tableAdresses;
      console.log(this.listAdresse);
    })
  }

  getTable(){
    this.dataSrv.lister().subscribe((element: Covoiturage[]) => 
      element.forEach((covoit: Covoiturage) => {
        if(new Date(covoit.date).getTime()>this.today.getTime()){
          return this.list.push(covoit)
        } else {
          return this.listHist.push(covoit)
        }
      })
    );
  }
}
