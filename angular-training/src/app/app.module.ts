import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';

import { TemplateModule } from 'src/template/template.module';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddPostComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
