import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CorePrototype } from './services/core.prototype';
import { CommunicationService } from '../shared/helpers/communication';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSpaceComponent } from './pages/user-space/user-space.component';



@NgModule({
  declarations: [NotFoundComponent, LoginComponent, UserSpaceComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CorePrototype, CommunicationService]
})
export class CoreModule { }
