import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  cars?: Car[];
  errorWrite?:string

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: data => {
        this.cars = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.cars = JSON.parse(err.error).message;
        } else {
          this.errorWrite = "Error with status: " + err.status;
        }
      }
    });
  }
}
