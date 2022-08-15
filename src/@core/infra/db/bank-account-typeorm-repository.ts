import { BankAccount } from 'src/@core/domain/bank-account';
import { BankAccountRepository } from 'src/@core/domain/bank-account-repository';
import { BankAccountSchema } from './bank-account.schema';
import { Repository } from 'typeorm';

export class BankAccountTypeOrmRepository implements BankAccountRepository {
  constructor(private ormRepo: Repository<BankAccountSchema>) {}

  async insert(bankAccount: BankAccount): Promise<void> {
    const model = this.ormRepo.create(bankAccount);
    await this.ormRepo.save(model);
  }

  async findByAccountNumber(account_number: string): Promise<BankAccount> {
    const model = await this.ormRepo.findOneBy({ account_number });
    return new BankAccount(model.balance, model.account_number, model.id);
  }

  async update(bankAccount: BankAccount): Promise<void> {
    await this.ormRepo.update(bankAccount.id, { balance: bankAccount.balance });
  }
}
