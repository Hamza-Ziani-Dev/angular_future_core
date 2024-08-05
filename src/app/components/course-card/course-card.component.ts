import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {


  // Sharing data between parent  to child
  @Input({required: true}) courses: Course = {} as Course;

  
 // Sharing data between child to parent
 @Output() onCourseSelected = new EventEmitter<Course>();




  ngOnInit(): void {
  }

  onClickCourse(){
    this.onCourseSelected.emit(this.courses);
  }




}
