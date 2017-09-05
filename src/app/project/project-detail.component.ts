/**
 * Created by johannes.leonhard on 29.08.17.
 */
import { Component, Input , OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from './project.service';
import { Project } from './project';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'project-detail',
  template: `
    <div *ngIf="project">
      <h2>{{project.name}} details!</h2>
      <div><label>id: </label>{{project.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="project.name" placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
    </div>  `
})

export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  public ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.projectService.getProject(+params.get('id')))
      .subscribe((project) => this.project = project);
  }
  public goBack(): void {
    this.location.back();
  }
}
