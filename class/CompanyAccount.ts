import { DioAccount } from "./DioAccount.js";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    this.deposit(amount);
  };
}
