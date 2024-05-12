import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import * as moment from 'moment';

import * as formData from '../../form-data/form-values.json';
import { GeneralApiService } from 'src/app/services/general-api/general-api.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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
  label: any;
  registerFormControls: any;
  registerForm: any;
  isFormSubmitted = false;
  isExistingLoan = false;

  constructor(
    private apiService: GeneralApiService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

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
      netRevenue: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      cibil: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      loanTerm: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      commercialAssets: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      bankAssets: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      luxuryAssets: new FormControl(
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

  createPayload() {
    const date = moment(this.registerForm.value.date).format('MM-YYYY');
    const existingLoanDueDate = moment(this.registerForm.value?.existingLoanDueDate).format(
      'DD-MM-YYYY'
    );

    const payload = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      number: this.registerForm.value.number,
      address: this.registerForm.value.address,
      pincode: this.registerForm.value.pincode,
      constitution: this.registerForm.value.constitution,
      date: date,
      panNumber: this.registerForm.value.panNumber,
      nature: this.registerForm.value.nature,
      gstin: this.registerForm.value.gstin,
      sector: this.registerForm.value.sector,
      category: this.registerForm.value.category,
      existingLoanType: this.registerForm.value?.existingLoanType || null,
      existingLoanLimit: this.registerForm.value?.existingLoanLimit || null,
      existingLoanDueDate: existingLoanDueDate || null,
      existingLoanBankName: this.registerForm.value?.existingLoanBankName || null,
      existingLoanROI: this.registerForm.value?.existingLoanROI || null,
      loanRequestedType: this.registerForm.value.loanRequestedType,
      loanRequestedAmount: this.registerForm.value.loanRequestedAmount,
      loanRequestedPurpose: this.registerForm.value.loanRequestedPurpose,
      collateralOffered: this.registerForm.value.collateralOffered,
      netSales: this.registerForm.value.netSales,
      netProfit: this.registerForm.value.netProfit,
      netRevenue: this.registerForm.value.netRevenue,
      cibil: this.registerForm.value.cibil,
      loanTerm: this.registerForm.value.loanTerm,
      commercialAssets: this.registerForm.value.commercialAssets,
      bankAssets: this.registerForm.value.bankAssets,
      luxuryAssets: this.registerForm.value.luxuryAssets
    };

    return payload;
  }

  onSumbitForm() {
    if (this.registerForm.invalid) {
      this.isFormSubmitted = true;
      return;
    }
    this.spinner.show();
    const payload = this.createPayload();

    this.apiService
      .loanForm(payload)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        this.router.navigateByUrl('/credit-score');
        this.spinner.hide();
      });
  }
}
