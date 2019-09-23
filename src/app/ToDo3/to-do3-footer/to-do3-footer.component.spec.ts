import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDo3FooterComponent } from './to-do3-footer.component';

describe('ToDo3FooterComponent', () => {
  let component: ToDo3FooterComponent;
  let fixture: ComponentFixture<ToDo3FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDo3FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDo3FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
