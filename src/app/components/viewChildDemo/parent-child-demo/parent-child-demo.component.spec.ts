import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildDemoComponent } from './parent-child-demo.component';

describe('ParentChildDemoComponent', () => {
  let component: ParentChildDemoComponent;
  let fixture: ComponentFixture<ParentChildDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentChildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
