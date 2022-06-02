import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //START This code depicts, how we can transfer parent component data into child component
  @Input('parentPropertyData') public someOtherName:any;
  //END This code depicts, how we can transfer parent component data into child component


  // start This code depicts, how we can transfer CHILD component data into PARENT component
 @Output() public myChildEvent = new EventEmitter();

 fireEvent(){
   this.myChildEvent.emit('Hey! I came from child component');
 }
   // end This code depicts, how we can transfer CHILD component data into PARENT component

}
