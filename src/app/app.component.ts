import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { TaskService } from './task.service';
import { CommonModule } from '@angular/common';  

export interface entity {
  value: string;
  viewValue: string;
}

export interface entity2{
  value: string;
  entity: string;
  data: entity[];
}

export interface Dats {
  id: Number;
  name: String;
  email: String;
  gender: String;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic Filter App';
  Count = [];
  constructor(private taskService : TaskService) {
    this.Count.length = 1; 
  }

  Hell = false;

  
  a_attr : Array<string> = [];
  r_attr : Array<string> = [];
  ao_attr : Array<string> = [];
  in_attr : Array<string> = [];
  ret_data : Dats[] = [];
  fin_attr : String;
  fin_data : String;
  fin_entity = "";

  payload = {
    "appointmentDate" : "12/10/2000",
    "name" : "XYZ",
    "email" : "newmail@gmail.com"
  };

  itemlist = [];
  payloadData = {};
  less = 0;
  more = 0;
  post(){
 
    this.taskService.addData(this.payload).subscribe((response:any) => {
      console.log(response);
      this.ret_data = response;
      this.Hell = true;
    });
  }

  postS(){
    this.taskService.addData2(this.fin_entity).subscribe((response:any) => {
      console.log(response);
      this.ret_data = response;
      this.Hell = true;
    });
  }

  postP(){
    console.log(this.fin_attr+" "+this.fin_data);
    
    this.payloadData = {
      "table" : "collection",
        "attr" :  this.fin_attr,
        "data" : Number(this.fin_data),
        "lt" : this.less,
        "gt" : this.more
    };
    console.log("Data is "+this.payloadData);
    this.taskService.queryData(this.payloadData).subscribe((response:any) => {
      console.log(response);
      this.ret_data = response;
      this.Hell = true;
    })
  }


  postND(){
    for(var i = 0; i < this.a_attr.length; i++)
{ 
    console.log("Attr No "+(i+1)+" "+this.a_attr[i]); 
    console.log("Relation No "+(i+1)+" "+this.r_attr[i]);
    console.log("Value No "+(i+1)+" "+this.in_attr[i]);
    console.log("And/Or No "+(i+1)+" "+this.ao_attr[i]);
}
  }

  
  postQuery(){


    this.payloadData = {
      "entity" : this.fin_entity,
      "items" : this.itemlist

    }
    
    for(var k=0;k<this.Count.length;k++)
      this.itemlist.push({
        "field": this.a_attr[k],
        "relation" : this.r_attr[k],
        "value" : this.in_attr[k],
        "and/or": this.ao_attr[k]
      });

      console.log(this.payloadData);

  }



  entityControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  
  
// Databse Tables
  
  entities: entity[]=[
     { value: '0',viewValue: 'Electronics' },
     { value: '1', viewValue: 'Fashion' },
     { value: '2',viewValue: 'Daily Essentials' },

  ];


// Table Data


// Table 1

  attrs1: entity[]=[
     { value: 'name',viewValue: 'Name' },
     { value: 'type', viewValue: 'Type' },
     { value: 'price',viewValue: 'Price' },
     { value: 'stock',viewValue: 'Stock' },
  ];


// Table 2

   attrs2: entity[]=[
     { value: 'bagName',viewValue: 'Bag Name' },
     { value: 'design', viewValue: 'Design' },
     { value: 'Make',viewValue: 'Make' },
     { value: 'edition',viewValue: 'Edition' },
  ];

// Table 3

  attrs3: entity[]=[
     { value: 'product',viewValue: 'Product' },
     { value: 'usage', viewValue: 'Usage' },
     { value: 'weight',viewValue: 'Weight' },
     { value: 'unit',viewValue: 'Units' },
  ];

// Add more tables here

// --


// Relating tables with attribuites

  values: entity2[] = [
     { value: 'Electronics',entity: 'Electronics', data: this.attrs1 },
     { value: 'Cosmetics', entity: 'Cosmetics', data: this.attrs2 },
     { value: 'Essentials',entity: 'Essentials', data: this.attrs3 },
  ];

// --

  reln: entity[]=[
     { value: 'lt',viewValue: '<' },
     { value: '=', viewValue: '=' },
     { value: 'gt',viewValue: '>' },
     { value: 'like',viewValue: 'like' },
     { value: 'in',viewValue: 'in' },
     { value: 'lte', viewValue: '<=' },
     { value: 'gte',viewValue: '>=' },
  ];

  ador: entity[]=[
     { value: 'and',viewValue: 'And' },
     { value: 'or', viewValue: 'Or' },
     { value: 'not', viewValue: 'Not' },
     { value: 'nor', viewValue: 'Nor' },
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
      this.attrs1 = this.values[value].data;
      this.fin_entity = this.values[value].value;
      console.log(this.fin_entity);
    console.log(value);
  }

  changeAttr(value, index){
    console.log(value+" "+index);
    this.fin_attr = value;
    this.a_attr[index] = value;

  }

    changeReln(value, index){
    this.less = 0;
    this.more = 0;
    if(value=="gt")
      this.more =1;
    if(value=="lt")
      this.less = 1;
    if(value=="=")
    {
      this.less = 0;
      this.more = 0;
    }
    console.log(value+" "+index);
    this.r_attr[index] = value;

  }

   changeValue(value, index){
    console.log(value);
    this.fin_data = value;
    this.in_attr[index] = value;
  }

   changeAndOr(value, index){
    console.log(value+" "+index);
    this.ao_attr[index] = value;

  }

  refresh(){
     window.location.reload();
  }
}

