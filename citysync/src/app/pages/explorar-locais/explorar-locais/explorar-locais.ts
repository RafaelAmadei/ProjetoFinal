
import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from '../../../shared/models/ocorrencia.model';
import { OcorrenciaService } from '../../../shared/services/ocorrencia.service';

@Component({
  selector: 'app-explorar-locais',
  standalone: false,
  styleUrl: './explorar-locais.css',
  templateUrl: './explorar-locais.html',
})
export class ExplorarLocais implements OnInit {

  pesquisa: string = '';
  categoriaSelecionada: string = '';
  statusSelecionado: string = '';

  ocorrenciaEmEdicao: Ocorrencia | null = null;
  ocorrencias: Ocorrencia[] = [];

  constructor(private ocorrenciaService: OcorrenciaService) {}
alterarStatus(id: number, novoStatus: string): void {
  const ocorrencia = this.ocorrencias.find(o => o.id === id);

  if (ocorrencia) {
    this.ocorrenciaService.atualizar({
      ...ocorrencia,
      status: novoStatus
    });

    this.carregarOcorrencias();
  }
} 
alertaDetalhes(ocorrencia: Ocorrencia): void {
  alert(
    'Título: ' + ocorrencia.titulo +
    '\nCategoria: ' + ocorrencia.categoria +
    '\nLocal: ' + ocorrencia.local +
    '\nDescrição: ' + ocorrencia.descricao +
    '\nStatus: ' + ocorrencia.status
  );
}
  editarOcorrencia(ocorrencia: Ocorrencia): void {
  this.ocorrenciaService.atualizar(ocorrencia);
  this.carregarOcorrencias();
  }

  ngOnInit(): void {
    this.carregarOcorrencias();
  }

  carregarOcorrencias(): void {
    this.ocorrencias = this.ocorrenciaService.listar();
  }
  
  get totalOcorrencias(): number {
  return this.ocorrencias.length;
}

get ocorrenciasPendentes(): number {
  return this.ocorrencias.filter(o => o.status === 'Pendente').length;
}

get ocorrenciasResolvidas(): number {
  return this.ocorrencias.filter(o => o.status === 'Resolvida').length;
}
  get ocorrenciasFiltradas(): Ocorrencia[] {
    return this.ocorrencias.filter(ocorrencia => {

      const correspondePesquisa =
        ocorrencia.titulo.toLowerCase().includes(this.pesquisa.toLowerCase()) ||
        ocorrencia.local.toLowerCase().includes(this.pesquisa.toLowerCase());

      const correspondeCategoria =
        !this.categoriaSelecionada ||
        ocorrencia.categoria === this.categoriaSelecionada;

      const correspondeStatus =
        !this.statusSelecionado ||
        ocorrencia.status === this.statusSelecionado;

      return correspondePesquisa && correspondeCategoria && correspondeStatus;
    });
  }

  excluirOcorrencia(id: number): void {
    this.ocorrenciaService.excluir(id);
    this.carregarOcorrencias();
  }
}
