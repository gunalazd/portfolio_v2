import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfComponent } from './portf.component';

describe('PortfComponent', () => {
  let component: PortfComponent;
  let fixture: ComponentFixture<PortfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
