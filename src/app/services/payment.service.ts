import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class PaymentService {
  private orderValue: number;
  private paymentUUID: string;

  public savePaymentData(orderValue: number, paymentUUID: string) {
    this.orderValue = orderValue;
    this.paymentUUID = paymentUUID;
  }

  public getOrderValue(): number {
    return this.orderValue;
  }

  public getPaymentUUID(): string {
    return this.paymentUUID;
  }
}
