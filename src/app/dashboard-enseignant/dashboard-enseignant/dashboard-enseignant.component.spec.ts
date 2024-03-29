import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEnseignantComponent } from './dashboard-enseignant.component';

describe('DashboardEnseignantComponent', () => {
  let component: DashboardEnseignantComponent;
  let fixture: ComponentFixture<DashboardEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
