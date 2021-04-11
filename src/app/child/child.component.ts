import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentText') parentTextBoxValue:any;
  @Input() parentClick:Subject<void>;
  @Output('onTextFromChild') passToParent:EventEmitter<any>=new EventEmitter<any>();

  clickCount=0;
  childTextBoxValue:any;

  constructor() { }

  ngOnInit(): void {
    this.parentClick.subscribe(()=>{
      this.incrementValue();
    });
  }
  incrementValue(){
    this.clickCount=this.clickCount+1;
  }

  passTextValueToParent(){
  this.passToParent.emit(this.childTextBoxValue);
  }
}
