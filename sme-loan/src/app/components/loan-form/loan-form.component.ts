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

import * as formData from '../../form-data/form-values.json'
import { GeneralApiService } from 'src/app/services/general-api/general-api.service';

@Component({
  selector: 'app-loan-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {
  formData:any = formData
  registerFormControls:any
  registerForm:any

  constructor(
    private apiService: GeneralApiService
  ){}
  
  ngOnInit(): void {
    this.createLoanForm()
  }

  createLoanForm(){
    this.registerFormControls = {
      firstName: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
      lastName: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),
    };
  
    this.registerForm = new FormGroup(this.registerFormControls);
  }

  onSumbitForm(){
    this.apiService.loanForm({"name":'khushi', "age":22, "location":"mumbai"})
    .then((res:any)=>{
      console.log(res);
    })
    .catch((err: any)=>{
      console.log(err);
    })
  }

}
