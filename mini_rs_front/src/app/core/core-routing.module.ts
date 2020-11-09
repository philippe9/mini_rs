import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserSpaceComponent } from './pages/user-space/user-space.component';


const CoreRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forChild(CoreRoutes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
