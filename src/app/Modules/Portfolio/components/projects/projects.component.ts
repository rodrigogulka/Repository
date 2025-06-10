import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  arrayProjects() {
    return [
      {
        id: 1,
        src: 'assets/imagem1.png',
        alt: 'Projeto 1',
        width: '300',
        height: '200'
      },
      {
        id: 2,
        src: 'assets/imagem2.png',
        alt: 'Projeto 2',
        width: '300',
        height: '200'
      }
    ];
  }

  trackItem(index: number, item: any) {
    return item.id || index;
  }
}
