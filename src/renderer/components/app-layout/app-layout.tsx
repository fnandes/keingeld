import * as React from 'react'
import { NavMenu } from '../nav-menu'
import { StatusBar } from '../status-bar'

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="font-sans text-gray-900 w-screen h-screen flex flex-col">
    <div className="flex-1 flex overflow-hidden">
      <div style={{ width: 240 }} className="flex-shrink-0 bg-gray-200 border-r border-gray-300">
        <NavMenu />
      </div>
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
    <footer className="bg-gray-100">
      <StatusBar />
    </footer>
  </div>
)