import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class PaymentService {
  private orderValue: number;
  private orderNumber: number;

  public savePaymentData(orderValue: number, orderNumber: number) {
    this.orderValue = orderValue;
    this.orderNumber = orderNumber;
  }

  public getOrderValue(): number {
    return this.orderValue;
  }

  public getOrderNumber(): number {
    return this.orderNumber;
  }
}
