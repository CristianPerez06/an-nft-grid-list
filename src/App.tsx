import React, { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { Nft } from './types/types'
import { mapNftFromRawNft } from './utilities/helpers'
import ModalContextProvider from './components/shared/modal/ModalProvider'
import Modal from './components/shared/modal/Modal'
import Spinner from './components/shared/spinner/Spinner'
import Alert, { TYPE } from './components/shared/alert/Alert'

import styles from './App.module.scss'

type Component = () => JSX.Element

const App: Component = () => {
  const [address, setAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [items, setItems] = useState<Nft[]>([])

  const handleOnAddressSelected = useCallback((value: string) => {
    setAddress(value)
  }, [])

  useEffect(() => {
    // No Address available - Don't try to call the API
    if (!address) {
      return
    }

    // Address available - Call the API
    const fetchNFTs = async (addr: string) => {
      const url = `https://api.nftport.xyz/v0/accounts/${addr}?chain=ethereum&include=metadata`
      const params = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.REACT_APP_PRIVATE_KEY || '',
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
        {/* No typed in address */}
        {!isLoading && !error && !address && (
          <div className={styles.messageContainer}>
            <Alert text="Please type in an valid address" className={styles.message} />
          </div>
        )}

        {/* Loading */}
        {isLoading && (
          <div className={styles.loading}>
            <Spinner />
          </div>
        )}

        {/* Show nfts list */}
        {!isLoading && !error && address && items.length !== 0 && <Content nfts={items} />}
        {!isLoading && !error && address && items.length === 0 && (
          <div className={styles.messageContainer}>
            <Alert text="There are no nfts to display" className={styles.message} />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className={styles.messageContainer}>
            <Alert text={error} type={TYPE.DANGER} className={styles.message} />
          </div>
        )}

        <Modal />
      </ModalContextProvider>
    </div>
  )
}

export default App
