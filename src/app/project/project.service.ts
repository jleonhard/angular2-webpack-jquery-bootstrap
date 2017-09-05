import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './mock-projects';

@Injectable()
export class ProjectService {
  public getProjects(): Promise<Project[]> {
    return Promise.resolve(PROJECTS);
  }
  public getProjectsSlowly(): Promise<Project[]> {
    return new Promise((resolve) => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getProjects()), 2000);
    });
  }
  public getProject(id: number): Promise<Project> {
    return this.getProjects()
               .then((projects) => projects.find((project) => project.id === id));
  }
}