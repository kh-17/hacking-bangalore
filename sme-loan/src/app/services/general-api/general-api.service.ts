import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {
  constructor() {}

  loanForm(loanData: any) {
    const body: any = loanData;
    return axios.post('http://localhost:3000/api/user', body);
  }

  predictLoan(payload: any) {
    const body: any = payload;
    return axios.post('http://localhost:3000/predict', body);
  }
}
