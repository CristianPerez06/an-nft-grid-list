import { Nft, RawNft } from '../types/types'

export const mapNftFromRawNft = (rawNfts: RawNft[]) => {
  const nfts: Nft[] = rawNfts.map((rawNft: RawNft) => {
    return {
      contractAddress: rawNft.contract.address,
      tokenId: rawNft.tokenId,
      name: rawNft.name,
      description: rawNft.description,
      fileUrl: rawNft.image.pngUrl,
      creatorAddress: rawNft.contract.contractDeployer,
      imageUrl: rawNft.image.pngUrl,
    }
  })
  return nfts
}
