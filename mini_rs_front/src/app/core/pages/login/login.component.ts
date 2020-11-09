import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ENDPOINTS } from '../../../shared/global/endpoints';
import { CorePrototype } from '../../services/core.prototype';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {
    email_utilisateur: '',
    password_user: ''
  };
  constructor(private service: CorePrototype, public router: Router) { }

  ngOnInit(): void {
  }
  submit(form: NgForm) {
    if (!form.valid) {
      alert('Veuillez renseigner tous les champs');
      return;
    }

    this.service.post(ENDPOINTS.post_login, this.user).then((data) => {
      if (data.body.id_utilisateur) {
        localStorage.setItem('app_user', JSON.stringify(data.body));
        // location.href = 'localhost:4200/user-space';
        this.router.navigate(['/user-space']);

      } else {

      }
    })
  }


}
