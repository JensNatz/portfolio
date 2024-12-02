import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';
import {TranslatePipe} from "@ngx-translate/core";
import AOS from 'aos';


@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContactFormComponent, TranslatePipe],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }

}
