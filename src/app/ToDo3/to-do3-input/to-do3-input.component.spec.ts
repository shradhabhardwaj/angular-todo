import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDo3InputComponent } from './to-do3-input.component';

describe('ToDo3InputComponent', () => {
  let component: ToDo3InputComponent;
  let fixture: ComponentFixture<ToDo3InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDo3InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDo3InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
