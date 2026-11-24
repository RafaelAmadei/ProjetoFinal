import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from '../../../shared/models/ocorrencia.model';
import { OcorrenciaService } from '../../../shared/services/ocorrencia.service';

@Component({
  selector: 'app-perfil',
  standalone: false,
  styleUrl: './perfil.css',
  templateUrl: './perfil.html',
})
export class Perfil implements OnInit {

  nome = 'Nome do usuário';
  email = 'usuario@email.com';
  cidade = 'Minha cidade';

  editando = false;

  ocorrencias: Ocorrencia[] = [];

  constructor(private ocorrenciaService: OcorrenciaService) {}

  ngOnInit(): void {
    this.ocorrencias = this.ocorrenciaService.listar();

    const perfilSalvo = localStorage.getItem('citysync_perfil');

    if (perfilSalvo) {
      const perfil = JSON.parse(perfilSalvo);
      this.nome = perfil.nome;
      this.email = perfil.email;
      this.cidade = perfil.cidade;
    }
  }

  salvarPerfil(): void {
    localStorage.setItem('citysync_perfil', JSON.stringify({
      nome: this.nome,
      email: this.email,
      cidade: this.cidade
    }));

    this.editando = false;
    alert('Perfil atualizado com sucesso!');
  }

  get totalOcorrencias(): number {
    return this.ocorrencias.length;
  }

  get ocorrenciasResolvidas(): number {
    return this.ocorrencias.filter(o => o.status === 'Resolvida').length;
  }

  get ocorrenciasAndamento(): number {
    return this.ocorrencias.filter(o => o.status === 'Em andamento').length;
  }
}