import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PaymentDataResponse} from "../web/responses/payment-data-response";
import {Endpoints} from "../constants/endpoints";
import {PaymentService} from "../services/payment.service";
import {BankService} from "../services/bank.service";

@Component({
  selector: 'app-bank-select',
  templateUrl: './bank-select.component.html',
  styleUrls: ['./bank-select.component.css']
})
export class BankSelectComponent implements OnInit {
  transferAmount: number;
  orderNumber: number;
  loadingData = true;
  dataLoadedCorrectly: boolean;

  constructor(private route: ActivatedRoute, private http: HttpClient, private paymentService: PaymentService,
              private bankService: BankService) {
  }

  ngOnInit(): void {
    const paymentUUID = this.route.snapshot.params['paymentUUID'];
    this.http.get<PaymentDataResponse>(`${Endpoints.BACKEND_BASE_ENDPOINT}/${paymentUUID}`)
      .subscribe({
        next: response => {
          this.loadingData = false;
          this.transferAmount = response.orderValue;
          this.orderNumber = response.orderNumber;
          this.paymentService.savePaymentData(this.transferAmount, paymentUUID);
          this.dataLoadedCorrectly = true;
        },
        error: () => {
          this.loadingData = false;
          this.dataLoadedCorrectly = false;
        }
      });
  }

  setSelectedBankName(bankName: string): void {
    this.bankService.setBankName(bankName);
  }
}
