import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivityComponent } from './components/activity/activity.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [ActivityComponent, FeedsComponent, GalleryComponent, HeaderComponent],
  exports: [ActivityComponent, FeedsComponent, GalleryComponent, HeaderComponent],
  entryComponents: [ActivityComponent, FeedsComponent, GalleryComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
