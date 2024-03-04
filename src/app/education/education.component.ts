import { Component, Renderer2 } from '@angular/core';
import { InViewportModule } from 'ng-in-viewport';

const ed = [
  {
    name: 'Angular - The Complete Guide (2022 Edition)',
    subtype: 'Udemy Course Certificate',
    year: '2022',
    ref: 'http://ude.my/UC-2c6835ca-8abf-4d47-9e04-9b69e5022241',
    logo: 'angular_logo'
  },
  {
    name: 'Java 1 – Introduction to Java',
    subtype: 'JavaGuru Course',
    year: '2017',
    ref: 'https://javaguru.lv/en/',
    logo: 'java_logo'
  },
  {
    name: 'ISTQB® Certified Tester Foundation Level certification',
    subtype: 'Certificate',
    year: '2016',
    ref: 'https://www.istqb.org/',
    logo: 'ISTQB_logo'
  },
  {
    name: 'Bachelor’s degree in Computer Science',
    subtype: 'Riga Technical university',
    year: '2012',
    ref: 'https://www.rtu.lv/en',
    logo: 'RTU_logo'
  },
];

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [InViewportModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = ed;

  constructor(private renderer: Renderer2) {}

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
}
}
