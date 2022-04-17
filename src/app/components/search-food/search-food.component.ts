import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.scss']
})
export class SearchFoodComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  search : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    this.onSearch.emit(this.search);
  }
}
