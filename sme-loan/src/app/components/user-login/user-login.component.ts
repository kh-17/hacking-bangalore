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
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  registerFormControls: any;
  registerForm: any;
  isFormSubmitted = false;

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
      )
    };

    this.registerForm = new FormGroup(this.registerFormControls);
  }

  onSumbitForm() {
    this.spinner.show();
    setTimeout(() => {
      this.router.navigateByUrl('/loan-form');
      this.spinner.hide();
    }, 4000);
  }
}
