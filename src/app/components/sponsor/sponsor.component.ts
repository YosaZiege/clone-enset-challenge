import { Component, input } from '@angular/core';

@Component({
  selector: 'enset-sponsor',
  imports: [],
  templateUrl: './sponsor.component.html'
})
export class SponsorComponent {
  data = input<any>({});
}
