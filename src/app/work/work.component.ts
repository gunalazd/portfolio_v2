import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { InViewportModule } from 'ng-in-viewport';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, InViewportModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  experiences = require("./work-exp.json")

  constructor(private renderer: Renderer2) {}

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
}
}
