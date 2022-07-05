import * as React from 'react'

export type DataTableCellProps = {
  width: number
  value?: number | string | boolean
  renderValue: (value?: number | string | boolean) => React.ReactElement
}
export const DataTableCell: React.FC<DataTableCellProps> = ({ width, value, renderValue }) => (
  <div style={{ width }} className="py-1 px-2">
    {renderValue(value)}
  </div>
)