import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import { Nft } from './types/types'
import { mapNftFromRawNft } from './utilities/helpers'
import ModalContextProvider from './components/shared/modal/ModalProvider'
import Modal from './components/shared/modal/Modal'
import Spinner from './components/shared/spinner/Spinner'
import Alert, { TYPE } from './components/shared/alert/Alert'

import styles from './App.module.scss'
import Grid from './components/grid/Grid'
import Button from './components/shared/button/Button'

type Component = () => JSX.Element

const App: Component = () => {
  const [address, setAddress] = useState('')
  const [nextPage, setNextPage] = useState('')
  const [continuation, setContinuation] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [items, setItems] = useState<Nft[]>([])

  const PAGE_SIZE = 25

  const handleOnAddressSelected = useCallback((value: string) => {
    setAddress(value)
  }, [])

  const handleOnLoadMoreClick = useCallback(() => {
    setContinuation(nextPage)
  }, [nextPage])

  const messagesEndRef = useRef<any>()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView()
  }

  useEffect(() => {
    // No Address available - Don't try to call the API
    if (!address) {
      return
    }

    // Address available - Call the API
    const fetchNFTs = async (account: string, cont: string) => {
      let url = `https://api.nftport.xyz/v0/accounts/${account}?chain=ethereum&page_size=${PAGE_SIZE}&include=metadata`
      if (cont) {
        url = url + `&continuation=${cont}`
      }
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
          const { nfts, continuation } = res
          const nftsList = mapNftFromRawNft(nfts)
          setNextPage(continuation)
          setItems((prev) => [...prev, ...nftsList])
        })
        .catch((err) => {
          console.log(err.message)
          setError('Oops... Something went wrong. Please try again.')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    fetchNFTs(address, continuation)
  }, [address, continuation])

  useEffect(() => {
    // On first load don't scroll page
    if (!continuation) {
      return
    }
    scrollToBottom()
  }, [items])

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

        {/* Ask for a user address */}
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

        {/* Loading */}
        {isLoading && (
          <div className={styles.loading}>
            <Spinner />
          </div>
        )}

        {/* Show nfts list */}
        {!isLoading && !error && address && items.length !== 0 && (
          <div className={styles.main}>
            <div className={styles.gridContainer}>
              <Grid nfts={items} />
              <div className={styles.buttonContainer}>
                <Button content={'Load more!'} onClick={handleOnLoadMoreClick} className={styles.loadMore} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
        <Modal />
      </ModalContextProvider>
    </div>
  )
}

export default App
