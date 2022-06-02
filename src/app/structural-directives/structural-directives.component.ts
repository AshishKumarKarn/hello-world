import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showOrHide = true;
  public cars  = ['Tata','Hyundai','Maruti'];
  public color="red";
  public styl = {
    color:'blue'
  }
  public myStyle = {
    textStyle:true//see in css
  }
}
