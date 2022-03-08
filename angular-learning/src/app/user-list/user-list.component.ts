import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-line',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  placeVal = '';
  nameVal = '' ;
  inputVal = '' ;
  counterVal = 0 ;
  getName(name:string, version:number){
    alert(name+' '+version);
  }
  getPlaceVal(val:string){
    this.placeVal = val ;
  }
  getNameVal(val:string){
    this.nameVal = val ;
  }
  getInputVal(val:string){
    this.inputVal = val ;
  }
  counter(type:string){
    type === 'plus' ? this.counterVal++ : this.counterVal-- ;
  }

}
