import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../model/car/car";
import {CarService} from "../../../services/car/car.service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentCar: Car = {
    model: '',
    engine: ''
  };

  message = '';
  constructor(private carService: CarService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCar(this.route.snapshot.params["id"]);
    }
  }

  getCar(id: string): void {
    this.carService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCar = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
