import { Component } from '@angular/core';
import { TextBoxComponent } from "../text-box/text-box.component";

@Component({
  selector: 'app-about',
  imports: [TextBoxComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
