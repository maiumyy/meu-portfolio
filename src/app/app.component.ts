import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  technologies = [
    { name: 'Angular', iconClass: 'devicon-angularjs-plain' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },
    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
    { name: 'Vue.js', iconClass: 'devicon-vuejs-plain' },
    { name: 'Laravel', iconClass: 'devicon-laravel-plain' },
    { name: 'PHP', iconClass: 'devicon-php-plain' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain' }
  ];

  projects = [
    { title: 'teste', description: 'testetesteteste' },
    { title: 'teste', description: 'testetesteteste' },
    { title: 'teste', description: 'testetesteteste' },
    { title: 'teste', description: 'testetesteteste' },
    { title: 'teste', description: 'testetesteteste' },
    { title: 'teste', description: 'testetesteteste' }
  ];
}