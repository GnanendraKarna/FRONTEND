import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpatientComponent } from './listofpatient.component';

describe('ListofpatientComponent', () => {
  let component: ListofpatientComponent;
  let fixture: ComponentFixture<ListofpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListofpatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListofpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
