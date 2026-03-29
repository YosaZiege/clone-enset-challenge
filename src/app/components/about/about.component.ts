import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'enset-about',
  imports: [],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit{
  data = input<any>({});

  ngOnInit(): void {

  }

}
