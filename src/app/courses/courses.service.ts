import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
   url: ''
  constructor(private http: HttpClient) { }

  getCourses(): Observable<any>{
    return this.http.get('https://academia.eadbox.com/api/courses')
  }
}
