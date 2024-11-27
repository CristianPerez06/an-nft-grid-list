export interface RawNft {
  tokenId: string
  tokenType: string
  name: string
  description: string
  contract: {
    address: string
    name: string
    symbol: string
    totalSupply: string
    contractDeployer: string
  }
  image: {
    cachedUrl: string
    thumbnailUrl: string
    pngUrl: string
    contentType: string
    size: string
    originalUrl: string
  }
  raw: {
    tokenUri: string
    error: string
  }
}

export interface Nft {
  contractAddress: string
  tokenId: string
  name: string
  description: string
  creatorAddress: string
  thumbnailUrl: string
  fullUrl: string
}
