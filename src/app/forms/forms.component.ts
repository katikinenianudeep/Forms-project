import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  zippattern = '^[a-zA-Z0-9]*$';
  stringifiedData: any;
  public subs = new Subscription();
  constructor(private formBuilder: FormBuilder, private router: Router, private addressService: AccountService) { }
      ngOnInit() {
        this.userForm = this.formBuilder.group({
             Name: ['', Validators.required],
             email: ['', [Validators.required, Validators.email]],
             phone: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
             zipcode: [null, [Validators.required, Validators.pattern(this.zippattern)]],
             id: ['', Validators.required],

        });

        this.subs.add(this.userForm.valueChanges.subscribe(data => {
              this.addressService.changeMessage(this.userForm);
            }));
   }

   _keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();

    }
}
   get f() { return this.userForm.controls; }

   submitForm() {
       this.submitted = true;
       if (this.userForm.invalid) {
      return;
  }
       this.router.navigate(['/form'],  {queryParams: this.userForm.value, skipLocationChange: true});
  }
   onReset() {
    this.submitted = false;
    this.userForm.reset();
}
}
