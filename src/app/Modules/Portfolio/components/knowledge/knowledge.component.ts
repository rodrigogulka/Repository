import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/Iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'], // Correção aqui
  standalone: true
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'Ícone de Conhecimento em HTML',
    },
    {
      src: 'assets/icons/knowledge/css.png',
      alt: 'Ícone de Conhecimento em CSS',
    },
    {
      src: 'assets/icons/knowledge/javascript.png',
      alt: 'Ícone de Conhecimento em JavaScript',
    }
  ]);
}
