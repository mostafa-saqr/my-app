import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaBoxComponent } from './media-box/media-box.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [MediaBoxComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MediaBoxComponent
  ]
})
export class TemplateModule { }
