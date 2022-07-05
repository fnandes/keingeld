import * as React from 'react'
import { Transaction } from 'src/renderer/stores/transactions'
import { DataTableRow } from './data-table-row'

export type DataTableProps = {
  transactions: Transaction[]
}

export const DataTable: React.FC<DataTableProps> = ({ transactions = [] }) => (
  <div>
    {transactions.length && transactions.map(transaction => (
      <DataTableRow key={transaction.id} transaction={transaction} />
    ))}
  </div>
)