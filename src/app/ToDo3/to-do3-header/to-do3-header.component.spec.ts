import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDo3HeaderComponent } from './to-do3-header.component';

describe('ToDo3HeaderComponent', () => {
  let component: ToDo3HeaderComponent;
  let fixture: ComponentFixture<ToDo3HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDo3HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDo3HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
