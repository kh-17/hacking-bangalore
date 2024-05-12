import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credit-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-score.component.html',
  styleUrls: ['./credit-score.component.scss']
})
export class CreditScoreComponent implements OnInit {
  isLoanSanctioned = localStorage.getItem('loanSanction') === 'true';
  isYoung = localStorage.getItem('youngComp') === 'true';
  loanAmount: any;
  loanTerm: any;
  processingFee: any;

  ngOnInit(): void {
    this.loanAmount = history.state.loanAmount;
    this.loanTerm = history.state.loanTerm;
    this.processingFee = history.state.processingFee;
  }
}
