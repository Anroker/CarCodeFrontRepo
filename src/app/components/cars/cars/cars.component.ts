import {Component, OnInit} from '@angular/core';
import {Car} from 'src/app/model/car/car';
import {CarService} from 'src/app/services/car/car.service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars?: Car[];
  currentCar: Car = {};
  currentIndex = -1;
  model = '';

  constructor(public carService: CarService) {
  }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars(): void {
    this.carService.getAll()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.cars = data;
        },
        error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.getAllCars();
    this.currentCar = {};
    this.currentIndex = -1;
  }

  setActiveCar(car: Car, index: number): void {
    this.currentCar = car;
    this.currentIndex = index;
  }

}
