import React from 'react'
import { UiNavBar } from './components/UiNavBar'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div>
      <UiNavBar />
      <Toaster position="top-center" />
    </div>
  )
}

export default App