import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'enset-planning',
  imports: [DatePipe],
  templateUrl: './planning.component.html',
})
export class PlanningComponent {
  hackathon: Boolean = true;
  date = new Date();
  data = input<any>({});

  switchCompitition(status: Boolean) {
    this.hackathon = status;
  }

  dateValidation(start: string, end: string) {
    // Ensure both strings are treated consistently
    const startDate = new Date(start.endsWith('Z') ? start : start + 'Z');
    const endDate = new Date(end.endsWith('Z') ? end : end + 'Z');
    const currentDate = new Date();
    return currentDate >= startDate && currentDate <= endDate;
  }
}
