import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'enset-team',
  imports: [RouterLink],
  templateUrl: './team.component.html'
})
export class TeamComponent {

  data = input<any>({});

}
