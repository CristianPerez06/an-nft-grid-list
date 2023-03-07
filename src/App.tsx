import React, { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { Nft } from './types/types'
import { mapNftFromRawNft } from './utilities/helpers'
import ModalContextProvider from './components/shared/modal/ModalProvider'
import Modal from './components/shared/modal/Modal'
import Spinner from './components/shared/spinner/Spinner'

import styles from './App.module.scss'

type Component = () => JSX.Element

const App: Component = () => {
  const [address, setAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [items, setItems] = useState<Nft[] | undefined>()

  const handleOnAddressSelected = useCallback((value: string) => {
    setAddress(value)
  }, [])

  useEffect(() => {
    if (!address) {
      return
    }

    const fetchNFTs = async (addr: string) => {
      const url = `https://api.nftport.xyz/v0/accounts/${addr}?chain=ethereum&include=metadata`
      const params = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: '973ae94d-b20e-4941-9746-991b8d3c381b', // TO DO - Move to ENV variable
        },
      }

      setIsLoading(true)
      fetch(url, params)
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          const { nfts } = res
          const nftsList = mapNftFromRawNft(nfts)
          setItems(nftsList)
        })
        .catch((err) => {
          console.log(err.message)
          setError('Oops... Something went wrong. Please try again.')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    fetchNFTs(address)
  }, [address])

  return (
    <div className={styles.app}>
      <ModalContextProvider>
        <Header onAddressSelected={handleOnAddressSelected} isDisabled={isLoading} />
        {isLoading && (
          <div className={styles.loading}>
            <Spinner />
          </div>
        )}
        {error && 'Error...'}
        {!isLoading && !error && <>{items ? <Content nfts={items} /> : <div>Please type in an address</div>}</>}
        <Modal />
      </ModalContextProvider>
    </div>
  )
}

export default App
