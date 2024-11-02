import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    CadastroComponent,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppModule { }