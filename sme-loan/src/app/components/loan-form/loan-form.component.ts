import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  Validators,
  FormGroup,
  AbstractControl
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import * as formData from '../../form-data/form-values.json';
import { GeneralApiService } from 'src/app/services/general-api/general-api.service';

@Component({
  selector: 'app-loan-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {
  formData = formData;
  registerFormControls: any;
  registerForm: any;
  label: any;
  isFormSubmitted = false;
  isExistingLoan = false;

  constructor(private apiService: GeneralApiService) {}

  ngOnInit(): void {
    this.createLoanForm();
    this.label = this.formData.loanForm;
  }

  createLoanForm() {
    this.registerFormControls = {
      name: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      email: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      number: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      address: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      pincode: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      constitution: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      date: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      panNumber: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      nature: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      gstin: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      sector: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      category: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      // existingLoanType: new FormControl({
      //   value: '',
      //   disabled: false
      // }),
      // existingLoanLimit: new FormControl(
      //   {
      //     value: '',
      //     disabled: false
      //   },
      //   [Validators.required]
      // ),
      // existingLoanDueDate: new FormControl(
      //   {
      //     value: '',
      //     disabled: false
      //   },
      //   [Validators.required]
      // ),
      // existingLoanBankName: new FormControl(
      //   {
      //     value: '',
      //     disabled: false
      //   },
      //   [Validators.required]
      // ),
      // existingLoanROI: new FormControl(
      //   {
      //     value: '',
      //     disabled: false
      //   },
      //   [Validators.required]
      // ),
      loanRequestedType: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      loanRequestedAmount: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      loanRequestedPurpose: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      collateralOffered: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      netSales: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      netProfit: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      capitalNetWorth: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      )
    };

    if (this.isExistingLoan) {
      this.registerFormControls['existingLoanType'] = new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      );
      this.registerFormControls['existingLoanLimit'] = new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      );
      this.registerFormControls['existingLoanDueDate'] = new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      );
      this.registerFormControls['existingLoanBankName'] = new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      );
      this.registerFormControls['existingLoanROI'] = new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      );
    }

    this.registerForm = new FormGroup(this.registerFormControls);
  }

  clickExistingLoan() {
    this.isExistingLoan = true;
    this.createLoanForm();
  }

  onSumbitForm() {
    console.log('eefe');

    if (this.registerForm.invalid) {
      this.isFormSubmitted = true;
      console.log('wdbf', this.registerForm);

      return;
    }

    debugger;
    this.apiService
      .loanForm(this.registerForm)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
