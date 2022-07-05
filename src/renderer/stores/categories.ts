import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { RootStore } from '.'

export class CategoryStore {
  constructor(protected rootStore: RootStore) {
    makeAutoObservable(this)
  }
}

export class Category {
  public name = ''

  constructor(
    protected store: CategoryStore,
    public id = uuidv4()) {
    makeAutoObservable(this)
  }
}