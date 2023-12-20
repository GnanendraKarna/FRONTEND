import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsnupdateComponent } from './ssnupdate.component';

describe('SsnupdateComponent', () => {
  let component: SsnupdateComponent;
  let fixture: ComponentFixture<SsnupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsnupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsnupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
