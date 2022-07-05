import * as React from 'react'
import * as moment from 'moment'
import NumberFormat from 'react-number-format'
import { DataTableCell } from './data-table-cell'
import { DeleteOutlined, EditOutlined } from '@material-ui/icons'
import { IconButton } from '../common'
import { Transaction } from 'src/renderer/stores/transactions'

export type DataTableRowProps = {
  transaction: Transaction
}
export const DataTableRow: React.FC<DataTableRowProps> = ({ transaction: { createdAt, value, description } }) => (
  <div className="flex border-b border-gray-200 hover:bg-teal-100">
    <DataTableCell width={200} value={createdAt} renderValue={v => <span>{moment(v as number).format('DD.MM.yyyy')}</span>} />
    <DataTableCell width={200} value={value} renderValue={v => <NumberFormat value={v as number} />} />
    <DataTableCell width={400} value={description} renderValue={v => (
      <span className="overflow-hidden block whitespace-nowrap text-ellipsis">{v}</span>
    )} />
    <div style={{ width: 50 }} className="py-1 px-2">
      <div className="whitespace-nowrap">
        <IconButton icon={<EditOutlined />} onClick={() => console.log('click')} />
        <IconButton icon={<DeleteOutlined />} onClick={() => console.log('click')} />
      </div>
    </div>
  </div>
)