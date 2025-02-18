import { Component } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';


@Component({
  selector: 'app-home',
  imports: [CustomButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  count: number=0;
  
  add(){
    this.count=addNumber(this.count,1)
  }
  subtract(){
    this.count=addNumber(this.count, -1)
  }
}


function addNumber(num1:number, num2:number):number{
  return num1+num2;
}
