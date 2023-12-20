import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetprimaryaffiliationComponent } from './getprimaryaffiliation.component';

describe('GetprimaryaffiliationComponent', () => {
  let component: GetprimaryaffiliationComponent;
  let fixture: ComponentFixture<GetprimaryaffiliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetprimaryaffiliationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetprimaryaffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
