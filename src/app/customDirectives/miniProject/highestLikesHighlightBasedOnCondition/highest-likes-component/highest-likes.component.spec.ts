import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestLikesComponentComponent } from './highest-likes-component.component';

describe('HighestLikesComponentComponent', () => {
  let component: HighestLikesComponentComponent;
  let fixture: ComponentFixture<HighestLikesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestLikesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestLikesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
