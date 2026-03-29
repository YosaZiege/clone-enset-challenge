import { Component, input } from '@angular/core';

@Component({
  selector: 'enset-footer',
  imports: [],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  data = input<any>({});

}
