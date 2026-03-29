import { Component, input } from '@angular/core';

@Component({
  selector: 'enset-qa',
  imports: [],
  templateUrl: './qa.component.html'
})
export class QaComponent {
  data = input<any>({});
  index = input<any>(0);

  visible: boolean = false;

  toggle() {
    this.visible = !this.visible;
  }
  getIcon() {
    return this.visible ? 'ri-eye-off-line' : 'ri-eye-line';
  }
}
