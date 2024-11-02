import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppComponent,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppModule { }