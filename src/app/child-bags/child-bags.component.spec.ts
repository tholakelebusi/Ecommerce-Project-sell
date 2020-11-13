import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBagsComponent } from './child-bags.component';

describe('ChildBagsComponent', () => {
  let component: ChildBagsComponent;
  let fixture: ComponentFixture<ChildBagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
