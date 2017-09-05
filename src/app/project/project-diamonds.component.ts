import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project-diamonds',
  template: `
    <ul class="projects">
      <li *ngFor="let project of projects"
        [class.selected]="project === selectedProject"
        (click)="onSelect(project)">
        <span class="badge">{{project.id}}</span> {{project.name}}
      </li>
    </ul>
  `,
  styleUrls: [ './projects.component.css' ],
  providers: [ProjectService]
})

export class ProjectDiamondsComponent implements OnInit {
  private projects: Project[];
  private selectedProject: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router) { }

  public ngOnInit(): void {
    this.getProjects();
  }
  private getProjects(): void {
    this.projectService.getProjects().then((projects) => this.projects = projects.slice(1, 6));
  }

  private onSelect(project: Project): void {
    this.selectedProject = project;
    this.gotoDetail();
  }
  private gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProject.id]);
  }
}
