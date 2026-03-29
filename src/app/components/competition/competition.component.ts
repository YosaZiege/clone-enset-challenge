import { Component, input } from '@angular/core';

@Component({
  selector: 'enset-competition',
  imports: [],
  templateUrl: './competition.component.html',
})
export class CompetitionComponent {
  data = input<any>({});
}
