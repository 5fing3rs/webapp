import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  
    @HostListener('input') oninput() {
  
      if (this.contactForm.valid) {
        this.disabledSubmitButton = false;
      }
    }
  
    constructor(private fb: FormBuilder, private commService: CommService) {
      
      this.contactForm = fb.group({
        'contactFormName': ['', Validators.required],
        'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
        'contactFormSubjects': ['', Validators.required],
        'contactFormMessage': ['', Validators.required],
        'contactFormCopy': [''],
        });
      }
    
      ngOnInit() {

        this.optionsSelect = [
          { value: 'Feedback', label: 'Feedback' },
          { value: 'Report a bug', label: 'Report a bug' },
          { value: 'Feature request', label: 'Feature request' },
          { value: 'Other stuff', label: 'Other stuff' },
          ];
        }
      
        onSubmit() {
          this.commService.sendMessage(this.contactForm.value).subscribe(() => {
            alert('Your message has been sent.');
            this.contactForm.reset();
            this.disabledSubmitButton = true;
          }, error => {
            console.log('Error', error);
          });
        }

        resolved(captchaResponse: string) {
          console.log(`Resolved captcha with response ${captchaResponse}:`);
        }
      
}
