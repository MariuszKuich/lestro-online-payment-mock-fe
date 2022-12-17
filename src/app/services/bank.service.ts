import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class BankService {
  private static readonly LOGIN = 'mariuszk';
  private static readonly PASSWORD = 'zaq1@WSX';

  private selectedBankName: string;

  public setBankName(bankName: string): void {
    this.selectedBankName = bankName;
  }

  public getSelectedBankName(): string {
    return this.selectedBankName;
  }

  public credentialsAreValid(login: string, password: string): boolean {
    return login == BankService.LOGIN && password == BankService.PASSWORD;
  }

  public getAccountBalance(orderValue: number): string {
    return (orderValue + this.getRandomNumber()).toFixed(2);
  }

  private getRandomNumber(): number {
    const min = 100;
    const max = 350;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
