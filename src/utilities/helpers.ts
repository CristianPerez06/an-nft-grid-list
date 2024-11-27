import { Nft, RawNft } from '../types/types'

export const mapNftFromRawNft = (rawNfts: RawNft[]) => {
  const nfts: Nft[] = rawNfts.map((rawNft: RawNft) => {
    return {
      contractAddress: rawNft.contract.address,
      tokenId: rawNft.tokenId,
      name: rawNft.name,
      description: rawNft.description,
      creatorAddress: rawNft.contract.contractDeployer,
      thumbnailUrl: rawNft.image.thumbnailUrl,
      fullUrl: rawNft.image.pngUrl,
    }
  })
  return nfts
}
