import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foodTypes!: string[] 

  constructor( private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getTypes().subscribe(
      res=> this.foodTypes = res
    );
    console.log(this.foodTypes);
    
  }
}
