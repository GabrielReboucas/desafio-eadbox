import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {

  courses = [];
  breakpoint: number

  constructor(private coursesService: CoursesService){}

  ngOnInit() {
    this.getCourses()
    this.breakpoint = (window.innerHeight <= 400) ? 1 : 4;
  }

  openCourse(course){
    window.open('https://academia.eadbox.com/courses/' + course.course_slug)
    console.log(course)
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  getCourses(){
    this.coursesService.getCourses()
    .subscribe(data => {this.courses = data 
      console.log(data)})
    
  }
}
