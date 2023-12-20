import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcostbyprocedureidComponent } from './getcostbyprocedureid.component';

describe('GetcostbyprocedureidComponent', () => {
  let component: GetcostbyprocedureidComponent;
  let fixture: ComponentFixture<GetcostbyprocedureidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetcostbyprocedureidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetcostbyprocedureidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
