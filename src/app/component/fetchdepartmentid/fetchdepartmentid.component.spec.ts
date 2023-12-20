import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchdepartmentidComponent } from './fetchdepartmentid.component';

describe('FetchdepartmentidComponent', () => {
  let component: FetchdepartmentidComponent;
  let fixture: ComponentFixture<FetchdepartmentidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchdepartmentidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchdepartmentidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
