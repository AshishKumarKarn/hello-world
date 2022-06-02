import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public amount =7;

  // START This code depicts, how we can transfer parent component data into child component
  public parentProperty ="I am parent class property";
  // END This code depicts, how we can transfer parent component data into child component

  public message=""
}
