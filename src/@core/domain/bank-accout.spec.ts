import { BankAccount } from './bank-account';

describe('bankAccount Unit Tests', () => {
  it('should create a bank accout', () => {
    const bankAccount = new BankAccount('12', 323, '1233-90');
    expect(bankAccount.id).toBe('12');
    expect(bankAccount.balance).toBe(323);
    expect(bankAccount.account_number).toBe('1233-90');
  });

  it('should debit an accout', () => {
    const bankAccount = new BankAccount('12', 300, '1233-90');
    bankAccount.debit(200);
    expect(bankAccount.balance).toBe(100);
  });

  it('should credit an accout', () => {
    const bankAccount = new BankAccount('12', 300, '1233-90');
    bankAccount.credit(200);
    expect(bankAccount.balance).toBe(500);
  });
});
