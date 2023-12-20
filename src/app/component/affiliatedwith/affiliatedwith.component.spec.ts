import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedwithComponent } from './affiliatedwith.component';

describe('AffiliatedwithComponent', () => {
  let component: AffiliatedwithComponent;
  let fixture: ComponentFixture<AffiliatedwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffiliatedwithComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffiliatedwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
