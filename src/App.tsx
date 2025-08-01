import React, { useEffect, useState } from 'react'
import { Nft } from './types/types'
import { mapNftFromRawNft } from './utilities/helpers'
import ModalContextProvider from './components/shared/modal/ModalProvider'
import Header from './components/Header'
import Modal from './components/shared/modal/Modal'
import Grid from './components/grid/Grid'
import { Type as AlertType } from './components/shared/alert/Alert'
import GridLoadMoreButton from './components/grid/shared/GridLoadMoreButton'
import GridAlert from './components/grid/shared/GridAlert'
import GridLoader from './components/grid/shared/GridLoader'

import styles from './App.module.scss'

type Component = () => JSX.Element

const App: Component = () => {
  const emptyNftList: Nft[] = []

  const initialState = {
    address: '',
    pageKey: '',
    nextPageKey: '',
    isLoading: false,
    error: '',
    items: emptyNftList,
  }

  const [appState, setAppState] = useState(initialState)

  const API_KEY = process.env.REACT_APP_PRIVATE_KEY || ''
  
  const PAGE_SIZE = 25

  const handleOnAddressSelected = (value: string) => {
    setAppState((prev) => {
      return {
        ...prev,
        address: value,
        pageKey: '',
        nextPageKey: '',
        items: [],
      }
    })
  }

  const handleOnLoadMoreClick = () => {
    const pageKey = appState.nextPageKey
    setAppState((prev) => {
      return {
        ...prev,
        pageKey: pageKey,
      }
    })
  }

  const fetchNFTs = async (account: string, nextPageKey?: string) => {
    let url = `https://eth-mainnet.g.alchemy.com/nft/v3/${API_KEY}/getNFTsForOwner?owner=${account}&withMetadata=true&pageSize=${PAGE_SIZE}`
    if (nextPageKey) {
      url = url + `&pageKey=${nextPageKey}`
    }
    const options = { method: 'GET', headers: { accept: 'application/json' } }

    setAppState((prev) => {
      return {
        ...prev,
        error: '',
        isLoading: true,
      }
    })

    fetch(url, options)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        const { ownedNfts, pageKey } = res
        const nftsList = mapNftFromRawNft(ownedNfts)

        const prevItems = appState.items as Nft[]
        setAppState((prev) => {
          return {
            ...prev,
            nextPageKey: pageKey,
            isLoading: false,
            items: [...prevItems, ...nftsList],
          }
        })
      })
      .catch((err) => {
        console.log(err.message)
        setAppState((prev) => {
          return {
            ...prev,
            isLoading: false,
            error: 'Oops... Something went wrong. Please try again.',
          }
        })
      })
  }

  useEffect(() => {
    // No Address available - Don't try to call the API
    if (!appState.address) {
      return
    }

    // Address available - Call the API
    fetchNFTs(appState.address, appState.pageKey)
  }, [appState.address, appState.pageKey])

  return (
    <div className={styles.app}>
      <ModalContextProvider>
        <Header onAddressSelected={handleOnAddressSelected} isDisabled={appState.isLoading} />

        {/* Show Loading spinner only on first load */}
        {appState.isLoading && appState.items.length === 0 && <GridLoader />}

        {/* No typed in address */}
        {!appState.error && !appState.address && <GridAlert text="Please type in an valid address" />}

        {/* Ask for a user address */}
        {!appState.isLoading && !appState.error && appState.address && appState.items.length === 0 && (
          <GridAlert text="There are no nfts to display" />
        )}

        {/* Error */}
        {appState.error && <GridAlert text={appState.error} type={AlertType.DANGER} />}

        {/* Show nfts list */}
        {!appState.error && appState.items.length !== 0 && (
          <div className={styles.main}>
            <div className={styles.gridContainer}>
              {/* Nft list */}
              <Grid nfts={appState.items} />

              {/* Load More button - Only if next page is available */}
              {!!appState.nextPageKey && (
                <GridLoadMoreButton isLoading={appState.isLoading} onClick={handleOnLoadMoreClick} />
              )}
            </div>
          </div>
        )}
        <Modal />
      </ModalContextProvider>
    </div>
  )
}

export default App
