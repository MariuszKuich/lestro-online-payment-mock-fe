import {Component, OnInit} from '@angular/core';
import {BankService} from "../services/bank.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bank-login',
  templateUrl: './bank-login.component.html',
  styleUrls: ['./bank-login.component.css']
})
export class BankLoginComponent implements OnInit {
  bankName: string;
  bankForm: FormGroup;
  incorrectCredentials = false;

  constructor(private bankService: BankService, private router: Router) {
  }

  ngOnInit(): void {
    this.bankName = this.bankService.getSelectedBankName();
    this.bankForm = new FormGroup({
      'login': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    const login = this.bankForm.get('login').value;
    const password = this.bankForm.get('password').value;

    if (this.bankService.credentialsAreValid(login, password)) {
      this.router.navigate(['/confirm-transfer']);
    } else {
      this.incorrectCredentials = true;
    }
  }
}
