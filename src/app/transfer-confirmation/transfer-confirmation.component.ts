import {Component, OnInit} from '@angular/core';
import {BankService} from "../services/bank.service";
import {PaymentService} from "../services/payment.service";
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../constants/endpoints";
import {TransferStatus} from "../enums/transfer-status";

@Component({
  selector: 'app-transfer-confirmation',
  templateUrl: './transfer-confirmation.component.html',
  styleUrls: ['./transfer-confirmation.component.css']
})
export class TransferConfirmationComponent implements OnInit {
  bankName: string;
  orderValue: number;
  accountBalance: string;
  transferStatus: string;

  transferAttemptWasMade = false;
  transferPending = false;

  constructor(private bankService: BankService, private paymentService: PaymentService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.bankName = this.bankService.getSelectedBankName();
    this.orderValue = this.paymentService.getOrderValue();
    this.accountBalance = this.bankService.getAccountBalance(this.orderValue);
  }

  onTransferConfirmation(): void {
    this.transferPending = true;
    this.http.post(Endpoints.POST_CONFIRM_TRANSFER + this.paymentService.getPaymentUUID(), null, { observe: "response" })
      .subscribe({
        next: () => {
          this.transferAttemptWasMade = true;
          this.transferStatus = TransferStatus.OK;
        },
        error: () => {
          this.transferAttemptWasMade = true;
          this.transferStatus = TransferStatus.NOT_OK;
        }
      });
  }

  onRedirect(): void {
    window.location.href = Endpoints.LESTRO_FE_REDIRECT_URL;
  }
}
