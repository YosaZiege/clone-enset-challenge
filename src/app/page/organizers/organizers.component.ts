import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as jsonData from '../../core/data/data.json';

@Component({
  selector: 'app-organizers',
  imports: [RouterLink],
  templateUrl: './organizers.component.html',
  styleUrl: './organizers.component.css'
})
export class OrganizersComponent {
  data: any = (jsonData as any).organizers;
}
