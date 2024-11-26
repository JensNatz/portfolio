import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {TranslatePipe} from "@ngx-translate/core";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslatePipe, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
formData = {
  name: '',
  email: '',
  message: ''}

http = inject(HttpClient)
mailTest = false;
toastMessageShown = false;

post = {
  endPoint: 'https://jens-natzschka.com/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};

onSubmit(ngForm: NgForm) {
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.formData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
        },
        error: (error) => {
          //console.error(error);
        },
        complete: () => {
          this.toastMessageShown = true;
          setTimeout(()=>{
            this.toastMessageShown = false;
          }, 2000);
        },
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

    ngForm.resetForm();
  }
}
}
