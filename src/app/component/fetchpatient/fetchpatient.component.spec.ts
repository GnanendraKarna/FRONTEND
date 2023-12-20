import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchpatientComponent } from './fetchpatient.component';

describe('FetchpatientComponent', () => {
  let component: FetchpatientComponent;
  let fixture: ComponentFixture<FetchpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchpatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
