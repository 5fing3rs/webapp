import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { CaptchaService } from '../captcha.service';
import { CommService } from '../comm.service';
import { FormControl } from '@angular/forms';
import { RecaptchaModule } from 'angular-google-recaptcha';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  providers:[CaptchaService]
})
export class ContactusComponent implements OnInit {
  contactFormGroup = new FormGroup({ 
  contactFormName: new FormControl(''),
  contactFormEmail: new FormControl(''),
  contactFormSubjects: new FormControl(''),
  contactFormMessage: new FormControl(''),
  contactFormCopy: new FormControl(''),
  myRecaptcha: new FormControl(''),
  });
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  locationmap="assets/locationmap.png";
  captchaResponse = false;

   myRecaptcha = new FormControl(false);
 
    onScriptLoad() {
        console.log('Google reCAPTCHA loaded and is ready for use!')
    }
 
    onScriptError() {
        console.log('Something went long when loading the Google reCAPTCHA')
    }

    verifyCallback() {
    
    alert('veify the Google reCAPTCHA');
    this.captchaResponse= true;
    
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
          // set the captchaEndpoint property to point to  
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

        
 /** 
   * Process the contact form on submit event. 
   */ 
  send(value, valid): void { 

    if (valid) { 

      let postData = { 
        /*
        name: value.name, 
        email: value.email, 
        subject: value.subject, 
        message: value.message,
        */ 
         }; 

     
    } 

  } 
} 

