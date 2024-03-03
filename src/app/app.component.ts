import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from "./intro/intro.component";
import { WorkComponent } from "./work/work.component";
import { PortfComponent } from "./portf/portf.component";
import { EducationComponent } from "./education/education.component";
import { OutroComponent } from "./outro/outro.component";
import { AboutComponent } from "./about/about.component";
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';

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
    ]
})
export class AppComponent {
  title = 'Gunars Lazdanss';
}
