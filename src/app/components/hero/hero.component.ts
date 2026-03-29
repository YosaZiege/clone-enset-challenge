import { Component, input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'enset-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  year = new Date().getFullYear();
  data = input<any>({});

  private intervalId: any;
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCountdown() {
    const targetDate = new Date(this.data().date);

    targetDate.setDate(targetDate.getDate() + this.days);
    targetDate.setHours(targetDate.getHours() + this.hours);
    targetDate.setMinutes(targetDate.getMinutes() + this.minutes);
    targetDate.setSeconds(targetDate.getSeconds() + this.seconds);

    this.intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(this.intervalId);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        return;
      }

      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }, 1000);
  }
}
