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
mailTest = true;
toastMessageShown = false;

post = {
  endPoint: 'https://deineDomain.de/sendMail.php',
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
          this.toastMessageShown = true;
          setTimeout(()=>{
            this.toastMessageShown = false;
          }, 1000);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

    ngForm.resetForm();
  }
}
}
