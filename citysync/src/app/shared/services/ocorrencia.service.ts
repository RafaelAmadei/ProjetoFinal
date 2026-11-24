
import { Injectable } from '@angular/core';
import { Ocorrencia } from '../models/ocorrencia.model';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  private ocorrencias: Ocorrencia[] = [
    {
      id: 1,
      titulo: 'Buraco na via',
      categoria: 'buracos',
      local: 'Rua principal - Centro',
      descricao: 'Problema que necessita de reparo na pavimentação.',
      status: 'Pendente',
      imagem: '🛣️'
    },
    {
      id: 2,
      titulo: 'Poste sem iluminação',
      categoria: 'iluminacao',
      local: 'Jardim América',
      descricao: 'Trecho da rua com iluminação pública inoperante.',
      status: 'Em andamento',
      imagem: '💡'
    },
    {
      id: 3,
      titulo: 'Descarte irregular',
      categoria: 'lixo',
      local: 'Vila Nova',
      descricao: 'Acúmulo de lixo em espaço público.',
      status: 'Resolvida',
      imagem: '🗑️'
    }
  ];

  constructor() {
    const dadosSalvos = localStorage.getItem('citysync_ocorrencias');

    if (dadosSalvos) {
      this.ocorrencias = JSON.parse(dadosSalvos);
    }
  }

  private salvar(): void {
    localStorage.setItem(
      'citysync_ocorrencias',
      JSON.stringify(this.ocorrencias)
    );
  }

  listar(): Ocorrencia[] {
    return [...this.ocorrencias];
  }

  adicionar(ocorrencia: Ocorrencia): void {
    this.ocorrencias.push(ocorrencia);
    this.salvar();
  }

  atualizar(ocorrenciaAtualizada: Ocorrencia): void {
    this.ocorrencias = this.ocorrencias.map(ocorrencia =>
      ocorrencia.id === ocorrenciaAtualizada.id
        ? ocorrenciaAtualizada
        : ocorrencia
    );

    this.salvar();
  }

  excluir(id: number): void {
    this.ocorrencias = this.ocorrencias.filter(
      ocorrencia => ocorrencia.id !== id
    );

    this.salvar();
  }
}
