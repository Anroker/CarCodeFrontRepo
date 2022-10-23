import {Component, OnInit} from '@angular/core';
import {Car} from "../../../model/car/car";
import {CarService} from "../../../services/car/car.service.service";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  car: Car = {
    model: '',
    engine: ''
  }

  submitted: boolean = false;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
  }

  saveCar(): void {
    const data = {
      model: this.car.model,
      engine: this.car.engine
    };

    this.carService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCar(): void {
    this.submitted = false;
    this.car = {
      model: '',
      engine: '',
    };
  }

}
