import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cadastro-projeto',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './cadastro-projeto.html',
  styleUrl: './cadastro-projeto.scss'
})
export class CadastroProjeto {
  nome = '';
  descricao = '';
  mensagem = '';

  salvar(): void {
    if (!this.nome.trim()) {
      this.mensagem = 'Informe o nome do projeto.';
      return;
    }

    this.mensagem = `Projeto "${this.nome.trim()}" validado com sucesso!`;
  }

  limpar(): void {
    this.nome = '';
    this.descricao = '';
    this.mensagem = '';
  }
}
