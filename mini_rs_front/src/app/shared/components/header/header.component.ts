import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../model/data_model';
import { BASE_URL } from '../../global/codes';
import { ImageUtils } from '../../helpers/imageUtils';
import { DomSanitizer } from '@angular/platform-browser';
import { CorePrototype } from '../../../core/services/core.prototype';
import { ENDPOINTS } from '../../global/endpoints';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Utilisateur;
  fileLogo = null;

  constructor(public sanitizer: DomSanitizer, public request: CorePrototype) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('app_user'));
    this.user.couverture_utilisateur = BASE_URL + this.user.couverture_utilisateur;
    this.user.profil_utilisateur = BASE_URL + this.user.profil_utilisateur;
    console.log(this.user);
  }

  onchangeCouverture(event) {
    if (ImageUtils.isImage(event.target.files[0])) {
      if (ImageUtils.getFileSize(event.target.files[0]) < 1024 * 1024) {
        this.fileLogo = event.target.files[0];
        this.user.couverture_utilisateur = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(this.fileLogo)
        );

        console.log(event);

        // tslint:disable-next-line: max-line-length
        this.request.post(ENDPOINTS.post_update, { id_utilisateur: this.user.id_utilisateur, couverture_utilisateur: this.fileLogo }).then((data) => {
          console.log(data);
          this.user.couverture_utilisateur = BASE_URL + data.body[0].couverture_utilisateur;
          this.user.profil_utilisateur = BASE_URL + data.body[0].profil_utilisateur;
          localStorage.setItem('app_user', JSON.stringify(data.body[0]));
        })
      } else {
        alert('Veuillez choisir un fichier qui pese moins d\'un mega');

      }
      alert('Veuillez choisir un fichier qui es une image');
    }
  }
  onchangeProfile(event) {
    if (ImageUtils.isImage(event.target.files[0])) {
      if (ImageUtils.getFileSize(event.target.files[0]) < 1024 * 1024) {
        this.fileLogo = event.target.files[0];
        this.user.profil_utilisateur = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(this.fileLogo)
        );
        console.log(event);
        // tslint:disable-next-line: max-line-length
        this.request.post(ENDPOINTS.post_update, { id_utilisateur: this.user.id_utilisateur, profil_utilisateur: this.fileLogo }).then((data) => {
          console.log(data);
          this.user.couverture_utilisateur = BASE_URL + data.body[0].couverture_utilisateur;
          this.user.profil_utilisateur = BASE_URL + data.body[0].profil_utilisateur;
          localStorage.setItem('app_user', JSON.stringify(data.body[0]));

        });
      } else {
        alert('Veuillez choisir un fichier qui pese moins d\'un mega');

      }
    } else {
      alert('Veuillez choisir un fichier qui es une image');

    }
  }
}
