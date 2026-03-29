import { Component, input } from '@angular/core';
import { QaComponent } from './qa/qa.component';

@Component({
  selector: 'enset-faq',
  imports: [QaComponent],
  templateUrl: './faq.component.html'
})
export class FaqComponent {
  data = input<any>({});

}
