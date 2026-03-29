import { Component, input } from '@angular/core';

@Component({
  selector: 'enset-header',
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  data = input<any>({});
  menu:Boolean = true;
}
