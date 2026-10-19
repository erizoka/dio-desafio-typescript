import { DioAccount } from "./DioAccount.js";

export class PeopleAccount extends DioAccount {
  private doc_id: number;

  constructor(doc_id: number, name: string, accountNumer: number) {
    super(name, accountNumer);
    this.doc_id = doc_id;
  }

  getDocId = (): number => {
    return this.doc_id;
  };
}
