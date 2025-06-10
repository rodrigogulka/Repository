import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projetc/vfull.png',
      alt:'Projeto Aprendizado ',
      title: 'Aprendizado',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https;//www.githy.com/rodrigogulka',
        }
      ]
    }
  ])

}
