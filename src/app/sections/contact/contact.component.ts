import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: '[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  @ViewChild('canvasPosition') canvasPosition!: ElementRef;
  title: string = 'Contact';
  contactForm!: FormGroup;

  constructor(public el: ElementRef) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.min(1), Validators.max(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  onSubmit(e: Event) {
    if(!this.contactForm.valid) return;
    this.contactForm.disable();

    const templateParam = {
      name: this.contactForm.controls['name'].value,
      email: this.contactForm.controls['email'].value,
      message: this.contactForm.controls['message'].value
    };
    console.log(templateParam);
    emailjs.send('service_384wm3f', 'template_ygtenh8', templateParam, 'user_zK3wae624IxSeZKRy0Ye4')
      .then((result: EmailJSResponseStatus)=> {
        console.log(result.text);
        this.contactForm.enable();
      }, (e) => {
        console.log(e.text);
        this.contactForm.enable();
      });
  }

  ngOnDestroy() {
  }
}
