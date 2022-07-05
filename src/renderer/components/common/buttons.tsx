import * as React from 'react'

export type IconButtonProps = {
  icon: React.ReactElement
  onClick: () => void
}
export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => (
  <button onClick={onClick} className="cursor-pointer text-teal-700 hover:text-teal-400">
    {icon}
  </button>
)