import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface entity {
  value: string;
  viewValue: string;
}

export interface entity2{
  value: string;
  viewValue: string;
  data: entity[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic Filter App';
  Count = [];
  constructor() {
    this.Count.length = 1; 
  }
  entityControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  entities: entity[]=[
     { value: '0',viewValue: 'Electronics' },
     { value: '1', viewValue: 'Fashion' },
     { value: '2',viewValue: 'Daily Essentials' },

  ];

  attrs: entity[]=[
     { value: 'name',viewValue: 'Name' },
     { value: 'type', viewValue: 'Type' },
     { value: 'price',viewValue: 'Price' },
    { value: 'stock',viewValue: 'Stock' },
  ];

   attrs2: entity[]=[
     { value: 'bag',viewValue: 'Bag' },
     { value: 'type', viewValue: 'Type' },
     { value: 'Make',viewValue: 'Make' },
    { value: 'stock',viewValue: 'Stock' },
  ];

  attrs3: entity[]=[
     { value: 'cream',viewValue: 'Cream' },
     { value: 'wash', viewValue: 'Wash' },
     { value: 'Make',viewValue: 'Make' },
    { value: 'stock',viewValue: 'Stock' },
  ];


  values: entity2[] = [
     { value: 'Electronics',viewValue: 'Electronics', data: this.attrs },
     { value: 'Fashion', viewValue: 'Fashion', data: this.attrs2 },
     { value: 'Daily Essentials',viewValue: 'Daily Essentials', data: this.attrs3 },
  ];

  reln: entity[]=[
     { value: 'lt',viewValue: '<' },
     { value: '=', viewValue: '=' },
     { value: 'gt',viewValue: '>' },
     { value: 'like',viewValue: 'like' },
  ];

  ador: entity[]=[
     { value: 'and',viewValue: 'And' },
     { value: 'or', viewValue: 'Or' },
  ];

  /*
  getI(index)
  {
    console.log(index);
  }
  */

  add(){
    this.Count.length ++;
  }

  sub(){
    this.Count.length --;
  }

  changeEntity(value){
      this.attrs = this.values[value].data;
    
    
    console.log(value);
  }

  changeAttr(value, index){
    console.log(value+" "+index);
  }

    changeReln(value, index){
    console.log(value+" "+index);
  }

   changeValue(value){
    console.log(value);
  }

   changeAndOr(value, index){
    console.log(value+" "+index);
  }

  refresh(){
     window.location.reload();
  }
}
