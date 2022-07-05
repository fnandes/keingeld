import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { AppLayout } from './components/app-layout'
import { Workspace } from './components/workspace'
import { RootStore } from './stores'

import './theme.css'

const mainElement = document.createElement('div')
document.body.appendChild(mainElement)

const rootStore = new RootStore()

const App = () => (
  <AppLayout>
    <Workspace transactionStore={rootStore.transactionStore} />
  </AppLayout>
)

const root = createRoot(mainElement)
root.render(<App />)