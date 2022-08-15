import { DataSource, Repository } from 'typeorm';
import { BankAccount } from '../../domain/bank-account';
import { BankAccountSchema } from '../db/bank-account.schema';
import { BankAccountTypeOrmRepository } from './bank-account-typeorm-repository';

describe('BankAccountTypeOrmRepository', () => {
  let dataSource: DataSource;
  let ormRepo: Repository<BankAccountSchema>;
  let repository: BankAccountTypeOrmRepository;

  beforeEach(async () => {
    dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory',
      synchronize: true,
      logging: true,
      entities: [BankAccountSchema],
    });
    await dataSource.initialize();
    ormRepo = dataSource.getRepository(BankAccountSchema);
    repository = new BankAccountTypeOrmRepository(ormRepo);
  });

  it('should insert a new bank account', async () => {
    const bankAccount = new BankAccount('123', 100, '12387-05');
    await repository.insert(bankAccount);
    const model = await ormRepo.findOneBy({ account_number: '12387-05' });
    expect(model.id).toBe('123');
    expect(model.balance).toBe(100);
    expect(model.account_number).toBe('12387-05');
  });
});
