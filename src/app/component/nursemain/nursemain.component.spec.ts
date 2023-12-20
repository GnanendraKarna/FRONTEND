import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursemainComponent } from './nursemain.component';

describe('NursemainComponent', () => {
  let component: NursemainComponent;
  let fixture: ComponentFixture<NursemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NursemainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NursemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
