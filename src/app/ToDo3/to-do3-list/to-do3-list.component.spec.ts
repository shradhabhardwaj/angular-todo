import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDo3ListComponent } from './to-do3-list.component';

describe('ToDo3ListComponent', () => {
  let component: ToDo3ListComponent;
  let fixture: ComponentFixture<ToDo3ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDo3ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDo3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
