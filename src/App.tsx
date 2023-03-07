import React, { useCallback, useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Content from './components/Content'

type Component = () => JSX.Element

const App: Component = () => {
  const [address, setAddress] = useState('')

  const handleOnAddressSelected = useCallback((value: string) => {
    setAddress(value)
  }, [])

  return (
    <div className="app">
      <Header onAddressSelected={handleOnAddressSelected} />
      <Content address={address} />
    </div>
  )
}

export default App
