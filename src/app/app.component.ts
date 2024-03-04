import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from "./intro/intro.component";
import { WorkComponent } from "./work/work.component";
import { PortfComponent } from "./portf/portf.component";
import { EducationComponent } from "./education/education.component";
import { OutroComponent } from "./outro/outro.component";
import { AboutComponent } from "./about/about.component";
import { CommonModule } from '@angular/common';
import { InViewportModule } from 'ng-in-viewport';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet, 
      IntroComponent, 
      WorkComponent, 
      PortfComponent, 
      EducationComponent, 
      OutroComponent, 
      AboutComponent, 
      CommonModule,
      InViewportModule
    ]
})
export class AppComponent {

  constructor(private renderer: Renderer2) {}

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
}
  title = 'Gunars Lazdanss';
}
