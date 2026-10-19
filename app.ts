import { CompanyAccount } from "./class/CompanyAccount.js";
import { CreditAccount } from "./class/CreditAccount.js";
import { PeopleAccount } from "./class/PeopleAccount.js";

const peopleAccount: PeopleAccount = new PeopleAccount(7, "Erica", 127);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("BTS", 2013);
console.log(companyAccount);

const creditAccount: CreditAccount = new CreditAccount("Alan", 1);
console.log(creditAccount);

peopleAccount.deposit(15);
console.log(peopleAccount.getName());

peopleAccount.withdraw(5);
console.log(peopleAccount);

companyAccount.getLoan(3000);
console.log(companyAccount);

creditAccount.depositWithCredit(30);
console.log(creditAccount);
