import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllnursesComponent } from './allnurses.component';

describe('AllnursesComponent', () => {
  let component: AllnursesComponent;
  let fixture: ComponentFixture<AllnursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllnursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllnursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
