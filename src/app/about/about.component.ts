import { Component } from '@angular/core';
import { user } from '../types/User';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-about',
  imports: [CustomButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  creater: user={
    name: "Eric",
    lastname: "Carlsson",
    age: 23,
    job: "programer"
  }
  printCreater(){
    printUser(this.creater)
  }
  
}

function printUser(user: user){
  console.log("this user is "+ user.name + " "+user.lastname+" and is "+user.age+" yers old and works as a "+user.job)
}