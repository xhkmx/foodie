import { Component, Injectable } from '@angular/core';
import { LocalDataService } from '../local-data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  foodList: any;

  constructor(public localDataService: LocalDataService) {
    this.getFood();
  }


  
  getFood() {
    //this.foodList = this.localDataService.getFoodList();
    this.localDataService.getFoodList()
    .then(data => {
      this.foodList = data;
      console.log(this.foodList);
    });
  }

}
