import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {

  constructor() { }

  loanForm(
    loanData:any
  ) {
    const body: any = loanData
    return axios.post('https://bcbd-2409-40f2-2059-fbac-2996-3f93-d106-d24c.ngrok-free.app/api/user', body);
  }
}
