import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule]
})
export class CadastroComponent {

  constructor() {
    console.log('CadastroComponent');
  }
}
