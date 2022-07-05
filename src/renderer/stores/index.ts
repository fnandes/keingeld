import { CategoryStore } from './categories'
import { TransactionStore } from './transactions'

export class RootStore {
  public categoryStore = new CategoryStore(this)
  public transactionStore = new TransactionStore(this)
}