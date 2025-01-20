import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

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

  constructor() { }

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
}
