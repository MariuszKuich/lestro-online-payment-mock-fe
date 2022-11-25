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
}
