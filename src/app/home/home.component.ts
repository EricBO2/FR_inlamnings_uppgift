import { Component } from '@angular/core';
import { TextBoxComponent } from '../text-box/text-box.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { AboutComponent } from '../about/about.component';
import { generate } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [TextBoxComponent, CustomButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  count: number=0;
  
  add(){
    this.count=addToNumber(this.count)
  }
  subtract(){
    this.count=subtractToNumber(this.count)
  }

}

function addToNumber(count:number):number{
  return count+1;
}
function subtractToNumber(count:number):number{
  return count-1;
}