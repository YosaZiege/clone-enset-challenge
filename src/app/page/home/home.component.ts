import { Component } from '@angular/core';
import * as jsonData from './../../core/data/data.json';
import { HeaderComponent } from '../../core/components/header/header.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { PlanningComponent } from '../../components/planning/planning.component';
import { CompetitionComponent } from '../../components/competition/competition.component';
import { SponsorComponent } from '../../components/sponsor/sponsor.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { SpeakerComponent } from '../../components/speaker/speaker.component';
import { TeamComponent } from '../../components/team/team.component';
import { AdvisorComponent } from '../../components/advisor/advisor.component';

@Component({
  selector: 'enset-home',
  imports: [AboutComponent, HeroComponent, PlanningComponent, CompetitionComponent, SponsorComponent, FaqComponent, TimelineComponent, SpeakerComponent, TeamComponent, AdvisorComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  data: any = jsonData;

}
