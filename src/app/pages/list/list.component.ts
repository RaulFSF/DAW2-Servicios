import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { food } from 'src/app/interface/food';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  foodByType!: food[]
  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap( 
      ({type}) => this.foodService.getFoodByType(type)))
      .subscribe(res => this.foodByType = res);
      console.log(this.foodByType);
  }

}
