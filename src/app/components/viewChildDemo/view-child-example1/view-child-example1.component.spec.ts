import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildExample1Component } from './view-child-example1.component';

describe('ViewChildExample1Component', () => {
  let component: ViewChildExample1Component;
  let fixture: ComponentFixture<ViewChildExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildExample1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
