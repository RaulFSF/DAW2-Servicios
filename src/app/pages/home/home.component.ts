import { Component, OnInit } from '@angular/core';
import { food } from 'src/app/interface/food';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foodTypes!: string[]
  foundFood : food | undefined;
  
  constructor( private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getTypes().subscribe(
      res=> this.foodTypes = res
    );
  }

  buscar(food: string){
    this.foodService.findFood(food)
    .subscribe(res =>{
      this.foundFood = res;
    })
  }
}
