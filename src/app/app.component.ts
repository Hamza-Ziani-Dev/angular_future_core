import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_future_core';



  onEventCourse(course : Course){
    console.log("Event Course", course);
  }

  readonly courses : Array<Course> = [
    {
      id: 1,
      title: 'Angular Js Course',
      description: 'angular Js Description',
      imageUrl: 'assets/images/angular.png',
      lessonsCount: 10,
      isTopRated: true,
      isBestseller: true,
      category: 'Category 1',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'React Js Course',
      description: 'React Js Description 2',
      imageUrl: 'assets/images/react.jpg',
      lessonsCount: 20,
      isTopRated: false,
      isBestseller: false,
      category: 'Category 2',
      rating: 3.5,
    },
    {
      id: 3,
      title: 'Vue Js Course',
      description: 'Vue Js Description 3',
      imageUrl: 'assets/images/vue.jpeg',
      lessonsCount: 30,
      isTopRated: true,
      isBestseller: true,
      category: 'Category 3',
      rating: 5.0,
    },
  ];
  angularCourse = this.courses[0];
  reactCourse = this.courses[1];
  vueCourse = this.courses[2];
}
