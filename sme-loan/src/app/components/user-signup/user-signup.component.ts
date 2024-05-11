import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  ngOnInit(): void {
    console.log('hello');  
  }
  
}
