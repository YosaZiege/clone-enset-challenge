import { Component, input } from '@angular/core';


@Component({
  selector: 'enset-timeline',
  imports: [],
  templateUrl: './timeline.component.html'
})
export class TimelineComponent {
    data  = input<any>({});
    hackathon: boolean = true;
    eventsCount: number = 0;

    switchItem(isHackathon: boolean): void {
      this.hackathon = isHackathon;
    }
}
