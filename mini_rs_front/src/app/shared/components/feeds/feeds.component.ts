import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../model/data_model';
import { BASE_URL } from '../../global/codes';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  user: Utilisateur;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('app_user'));
    this.user.couverture_utilisateur = BASE_URL + this.user.couverture_utilisateur;
    this.user.profil_utilisateur = BASE_URL + this.user.profil_utilisateur;
  }

}
