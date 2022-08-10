import { Component, OnInit } from '@angular/core';
// import { Car } from '../model/car';
import { UserService } from '../../services/user.service';
import {Car} from "../../model/car/car";
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  cars?: Car[];
  errorMessage?:any;
  isError:boolean = false;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: data => {
        this.cars = data;
        this.isError = false;
      },
      error: err => {

        this.isError = true;

        console.log(err)
        if (err.error) {

          this.errorMessage = "Status code is " + err.error.status + " " + err.error.error + "! " + err.error.message;

        }
      }
    });
  }
}
