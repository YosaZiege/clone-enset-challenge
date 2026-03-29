import { Component, input, output } from '@angular/core';

@Component({
  selector: 'enset-btn',
  imports: [],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  href = input<String>('');
  target = input<String>('_blank');
  size = input<String>('md');
  icon = input<String>('');
  customStyle = input<String>('bg-gradient-to-r from-[#ff3366] to-[#ff5247]');
  content = input<String>('Register now');
  btnClick = output<void>();
}
