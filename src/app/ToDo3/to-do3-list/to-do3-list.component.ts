import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do3-list',
  templateUrl: './to-do3-list.component.html',
  styleUrls: ['./to-do3-list.component.css']
})
export class ToDo3ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'ToDo3';
  list=["happy","ever","after"];

}
