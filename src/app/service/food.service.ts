import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { food } from '../interface/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  food: food[] = [];
  foodList: food[] = [
    {
      type: "entrantes",
      name: "Papas locas",
      ingredients: [
        "Papas fritas", "Ali-oli"
      ],
      price: 2
    },
    {
      type: "entrantes",
      name: "Croquetas de Jamón Ibérico",
      ingredients: [],
      price: 6.30
    },
    {
      type: "entrantes",
      name: "Queso frito",
      ingredients: [
        "Queso frito", "Mermelada de arándanos o melocotón"
      ],
      price: 7.20
    },
    {
      type: "pizzas",
      name: "Ópera",
      ingredients: [
        'Tomate', 'Queso', 'Jamón', 'Atún', 'Millo'
      ],
      price: 9.90
    },
    {
      type: "pizzas",
      name: "Barbacoa",
      ingredients: [
        'Barbacoa', 'Queso', 'Salchichas', 'Bacon', 'Jamón'
      ],
      price: 10.60
    },
    {
      type: "pizzas",
      name: "Mar",
      ingredients: [
        'Tomate', 'Queso','Jamón', 'Cangrejo', 'Cebolla'
      ],
      price: 9.50
    },
    {
      type: "hamburguesas",
      name: "Tradicional",
      ingredients: [
        'Carne ternera 200g', 'Queso cheddar', 'Jamón', 'Bacon', 'Lechuga', 'Tomate', 'Cebolla'
      ],
      price: 8.80
    },
    {
      type: "hamburguesas",
      name: "Verde",
      ingredients: [
        'Carne ternera 200g', 'Queso cheddar', 'Lechuga', 'Tomate'
      ],
      price: 8
    },
    {
      type: "hamburguesas",
      name: "Casa",
      ingredients: [
        'Carne ternera 200g', 'Queso cheddar', 'Jamón', 'Bacon', 'Huevo'
      ],
      price: 8.50
    },
    {
      type: "bebidas",
      name: "Coca-Cola",
      ingredients: [],
      price: 2
    },
    {
      type: "bebidas",
      name: "Clipper de Fresa",
      ingredients: [],
      price: 1.50
    },
    {
      type: "bebidas",
      name: "Agua",
      ingredients: [],
      price: 1
    },
    {
      type: "postres",
      name: "Crepe",
      ingredients: [
        "Nuella", "Azúcar glass", "Nata", "Cerezas", "Fresas"
      ],
      price: 5.30
    },
    {
      type: "postres",
      name: "Brownie de Chocolate",
      ingredients: [
        "Brownie con almendras", "Helado de vainilla"
      ],
      price: 4.50
    },
    {
      type: "postres",
      name: "Flan de Huevo Casero",
      ingredients: [],
      price: 3.50
    },
  ];
  constructor() { 
    this.food = this.foodList;
  }

  getTypes(): Observable<string[]>{
    let foodTypes: string[] =[];
    this.food.forEach(food => {
      if(!foodTypes.some(x => x===food.type)){
        foodTypes.push(food.type);
      }
    });
    return of(foodTypes);
  }

  getFoodByType(type: string): Observable<food[]>{
    let foodByType: food[] = [];
    this.food.forEach(food =>{
      if(food.type===type){
        foodByType.push(food);
      }
    });
    return of(foodByType);
  }
}
