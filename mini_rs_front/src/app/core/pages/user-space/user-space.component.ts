import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../../shared/model/data_model';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.css']
})
export class UserSpaceComponent implements OnInit {
  user: Utilisateur;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('app_user'));
  }

}
