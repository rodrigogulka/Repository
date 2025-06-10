import { Component, signal } from '@angular/core';
import { Iexperinces } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<Iexperinces[]>([
    {
      sumary: {
        strong: "Ucred Serviços Financeiros",
        
        p: "2025 - Presente"
      },
      text: "Estagiário de T.I"
    }
  ])

}
