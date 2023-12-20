import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrmtdonebyparticularphysnComponent } from './trmtdonebyparticularphysn.component';

describe('TrmtdonebyparticularphysnComponent', () => {
  let component: TrmtdonebyparticularphysnComponent;
  let fixture: ComponentFixture<TrmtdonebyparticularphysnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrmtdonebyparticularphysnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrmtdonebyparticularphysnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
