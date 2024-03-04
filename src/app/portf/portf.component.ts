import { Component, Renderer2 } from '@angular/core';
import { InViewportModule } from 'ng-in-viewport';

@Component({
  selector: 'app-portf',
  standalone: true,
  imports: [InViewportModule],
  templateUrl: './portf.component.html',
  styleUrl: './portf.component.scss'
})
export class PortfComponent {
  constructor(private renderer: Renderer2) {}

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
}
}
