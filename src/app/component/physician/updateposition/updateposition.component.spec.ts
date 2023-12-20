import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepositionComponent } from './updateposition.component';

describe('UpdatepositionComponent', () => {
  let component: UpdatepositionComponent;
  let fixture: ComponentFixture<UpdatepositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatepositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
