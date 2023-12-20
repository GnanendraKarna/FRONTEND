import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainedInComponent } from './trained-in.component';

describe('TrainedInComponent', () => {
  let component: TrainedInComponent;
  let fixture: ComponentFixture<TrainedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainedInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
