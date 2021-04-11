import { Component, OnInit } from '@angular/core';
import {Subject } from 'rxjs'


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentTxtValue:any;
  parentClick:Subject<void>=new Subject<void>();
  childTextBoxValue:any;
  constructor() { }

  ngOnInit(): void {
  }
  onParentButtonClick(){
    this.parentClick.next();
  }

  updateInChildValue(event){
    this.childTextBoxValue=event;
  }

}
