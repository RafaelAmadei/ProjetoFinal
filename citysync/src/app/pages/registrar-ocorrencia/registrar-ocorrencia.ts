
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OcorrenciaService } from '../../shared/services/ocorrencia.service';
import { Ocorrencia } from '../../shared/models/ocorrencia.model';

@Component({
  selector: 'app-registrar-ocorrencia',
  standalone: false,
  templateUrl: './registrar-ocorrencia.html',
  styleUrl: './registrar-ocorrencia.css'
})
export class RegistrarOcorrencia implements OnInit {

  titulo = '';
  categoria = '';
  local = '';
  descricao = '';

  idEdicao: number | null = null;

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('editar');

    if (id) {
      this.idEdicao = Number(id);

      const ocorrencia = this.ocorrenciaService.listar()
        .find(item => item.id === this.idEdicao);

      if (ocorrencia) {
        this.titulo = ocorrencia.titulo;
        this.categoria = ocorrencia.categoria;
        this.local = ocorrencia.local;
        this.descricao = ocorrencia.descricao;
      }
    }
  }

  cadastrar(): void {
    if (!this.titulo || !this.categoria || !this.local || !this.descricao) {
      alert('Preencha todos os campos!');
      return;
    }

    if (this.idEdicao !== null) {
      const original = this.ocorrenciaService.listar()
  .find(item => item.id === this.idEdicao);

if (!original) {
  alert('Ocorrência não encontrada!');
  return;
}

const ocorrenciaAtualizada: Ocorrencia = {
  ...original,
  titulo: this.titulo,
  categoria: this.categoria,
  local: this.local,
  descricao: this.descricao
};

      this.ocorrenciaService.atualizar(ocorrenciaAtualizada);
      alert('Ocorrência atualizada com sucesso!');
    } else {
      const novaOcorrencia: Ocorrencia = {
        id: Date.now(),
        titulo: this.titulo,
        categoria: this.categoria,
        local: this.local,
        descricao: this.descricao,
        status: 'Pendente',
        imagem: '📍'
      };

      this.ocorrenciaService.adicionar(novaOcorrencia);
      alert('Ocorrência cadastrada com sucesso!');
    }

    this.router.navigate(['/explorar-locais']);
  }
}
