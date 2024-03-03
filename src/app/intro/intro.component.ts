import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  constructor(
    private viewportScroller: ViewportScroller,
  ) { }

  toTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
