import { Component, input } from '@angular/core';

@Component({
  selector: 'enset-advisor',
  imports: [],
  templateUrl: './advisor.component.html'
})
export class AdvisorComponent {
  data = input<any>({});

}
