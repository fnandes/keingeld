import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { TransactionStore } from 'src/renderer/stores/transactions'
import { DataTable } from './data-table'

export type WorkspaceProps = {
  transactionStore: TransactionStore
}
export const Workspace: React.FC<WorkspaceProps> = observer(({ transactionStore }) => {
  React.useEffect(() => {
    transactionStore.loadTransactions()
  }, [])

  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-100 border-b border-gray-300">
        <p className="p-4">filter</p>
      </div>
      <div className="flex-auto overflow-auto">
        <DataTable transactions={transactionStore.transactions} />
      </div>
    </div>
  )
})
