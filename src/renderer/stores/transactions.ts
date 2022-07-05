import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { RootStore } from '.'

export class TransactionStore {
  public transactions: Transaction[] = []
  public isLoading = false

  constructor(protected rootStore: RootStore) {
    makeAutoObservable(this)
  }

  async loadTransactions() {
    this.isLoading = true

    this.transactions = [...Array(50)].map(() => new Transaction(this))

    this.isLoading = false
  }
}

export class Transaction {
  public createdAt = 0
  public categoryId = ''
  public value = 0
  public description = ''

  constructor(
    protected store: TransactionStore,
    public id: string = uuidv4()) {
    makeAutoObservable(this)
  }
}