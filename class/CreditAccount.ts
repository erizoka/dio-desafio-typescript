import { DioAccount } from "./DioAccount.js";

export class CreditAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  depositWithCredit = (amount: number) => {
    this.deposit(amount + 10);
  };
}
