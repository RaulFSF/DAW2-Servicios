import { Component, Input, OnInit } from '@angular/core';
import { food } from 'src/app/interface/food';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  @Input() item! : food;

  constructor() { }

  ngOnInit(): void {
    
  }

}
