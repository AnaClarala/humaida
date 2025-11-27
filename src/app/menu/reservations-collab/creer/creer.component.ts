import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
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
  arrive: string;
  listAdresseDepart: string[];
  listAdresseArrive: string[];

  constructor(private adressesSrv: AdressesService, private dataSrv: ReservationCollabService) { }

  ngOnInit(): void {
    this.adressesSrv.getAdresseSub().subscribe(data => this.listAdresseDepart = data);
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

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        if(term.length < 2 ) {
           return []; 
        } else {
          let tableAdresses = [];
          this.adressesSrv.getAdresseBDD(this.depart).subscribe(data => { 
            data.features.forEach(element => {
              tableAdresses.push(element.properties.name+", "+element.properties.postcode+" "+element.properties.city);
            });
          });
          return tableAdresses;
        }
      }
    ),
    debounceTime(500));

    search1 = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        if(term.length < 2 ) {
           return []; 
        } else {
          let tableAdresses = [];
          this.adressesSrv.getAdresseBDD(this.arrive).subscribe(data => { 
            data.features.forEach(element => {
              tableAdresses.push(element.properties.name+", "+element.properties.postcode+" "+element.properties.city);
            });
          });
          return tableAdresses;
        }
      }
    ),
    debounceTime(500));


    /*
    * Partie 2 du component
    */
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
