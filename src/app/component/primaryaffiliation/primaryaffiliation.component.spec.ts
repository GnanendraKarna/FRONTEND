import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryaffiliationComponent } from './primaryaffiliation.component';

describe('PrimaryaffiliationComponent', () => {
  let component: PrimaryaffiliationComponent;
  let fixture: ComponentFixture<PrimaryaffiliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryaffiliationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryaffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
