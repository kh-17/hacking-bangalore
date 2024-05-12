import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  registerFormControls: any;
  registerForm: any;
  isFormSubmittedError = false;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  toogleTab(router: string) {
    this.router.navigateByUrl(router);
  }

  createLoginForm() {
    this.registerFormControls = {
      email: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      password: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      companyName: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      )
    };

    this.registerForm = new FormGroup(this.registerFormControls);
  }

  onSumbitForm() {
    if (this.registerForm.invalid) {
      this.isFormSubmittedError = true;
      return;
    }

    this.spinner.show();
    setTimeout(() => {
      this.router.navigateByUrl('/loan-form');
      this.spinner.hide();
    }, 4000);
  }
}
