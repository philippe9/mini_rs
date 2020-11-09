import { SafeUrl } from '@angular/platform-browser';

export interface Utilisateur {

  id_utilisateur: number;
  nom_utilisateur: string;
  pseudo_utilisateur: string;
  email_utilisateur: string;
  password_user: string;
  profil_utilisateur: string | File | SafeUrl;
  couverture_utilisateur: string | File | SafeUrl;

}
export interface DataResponse {
  body: any;
  code: number;
  status: string;
  message: string;
}
