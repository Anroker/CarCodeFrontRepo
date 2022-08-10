import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car/car';
import { CarService } from 'src/app/services/car/car.service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];

  constructor(public carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAll().subscribe((data: Car[]) => {
      console.log(data);
      this.cars = data;
    })
  }

}
