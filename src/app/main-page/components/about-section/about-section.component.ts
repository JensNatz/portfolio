import { Component, OnInit } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import AOS from 'aos';


@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }

}
