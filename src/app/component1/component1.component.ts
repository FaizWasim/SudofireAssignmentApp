import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  providers:[UserService]
})
export class Component1Component implements OnInit {

  myData:any;
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  publishData(){
    this.service.changeData(this.myData)
  }
}
