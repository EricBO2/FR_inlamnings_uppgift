import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  imports: [],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css'
})
export class TextBoxComponent {
  @Input() textBoxMessage!: string;
}
