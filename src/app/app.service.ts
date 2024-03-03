import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public onIntersection({
    target,
    visible,
  }: {
    target: Element;
    visible: boolean;
  }): void {
    console.log('target ', target);
    console.log('visible ', visible);

    if (visible) {
      this.renderer.addClass(target, visible ? 'active' : 'inactive');
      this.renderer.removeClass(target, visible ? 'inactive' : '');
    }
  }
}
