import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  template: `
    <h1>{{title}}</h1>
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

export class ProjectsComponent implements OnInit {
  public title = 'Projects';
  public projects: Project[];
  public selectedProject: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router) { }

  public getProjects(): void {
    this.projectService.getProjects().then((projects) => this.projects = projects);
  }
  public onSelect(project: Project): void {
    this.selectedProject = project;
    this.gotoDetail();
  }
  public gotoDetail(): void {
    this.router.navigate(['/projects/detail', this.selectedProject.id]);
  }
  public ngOnInit(): void {
    this.getProjects();
  }

}
