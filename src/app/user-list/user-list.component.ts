import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userData:any=[];
  constructor(private userService:UserService) {

this.userService.getAllUsers().subscribe(data=>{
  console.log(data)
  this.userData=data
})

  }
  ngOnInit(): void {
  }

}
