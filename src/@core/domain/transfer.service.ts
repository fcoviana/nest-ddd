import { BankAccount } from './bank-account';

export class TransferService {
  transfer(
    bankAccountSrc: BankAccount,
    bankAccountDest: BankAccount,
    amount: number,
  ) {
    bankAccountSrc.debit(amount);
    bankAccountDest.credit(amount);
  }
}
