/**
 * Created by johannes.leonhard on 30.08.17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project } from './project';

@Injectable()
export class ProjectService {
  private projectsUrl = 'api/projects';  // URL to web api
  constructor(private http: Http) { }

  public getProjects(): Promise<Project[]> {
    return this.http.get(this.projectsUrl)
               .toPromise()
               .then((response) => response.json().data as Project[])
               .catch(this.handleError);
  }
  public getProject(id: number): Promise<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then((response) => response.json().data as Project)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}