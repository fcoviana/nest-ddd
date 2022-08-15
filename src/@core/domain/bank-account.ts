import { randomUUID } from 'node:crypto';

type BankAccountProps = {
  balance: number;
  accountNumber: string;
};

export class BankAccount {
  id: string;
  balance: number;
  account_number: string;

  constructor(
    // public readonly props: BankAccountProps,
    balance: number,
    account_number: string,
    id?: string,
  ) {
    this.id = id ?? randomUUID();
    this.balance = balance;
    this.account_number = account_number;
  }

  /*
   * Regras de negócio
   */
  debit(amount: number): void {
    this.balance -= amount;
  }

  /*
   * Regras de negócio
   */
  credit(amount: number): void {
    this.balance += amount;
  }

  // get balance(): number {
  //   return this.props.balance;
  // }

  // get accountNumber(): string {
  //   return this.props.accountNumber;
  // }

  // private set accountNumber(value: string) {
  //   this.props.accountNumber = value;
  // }
}
