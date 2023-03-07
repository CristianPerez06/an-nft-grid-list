import { Nft, RawNft } from '../types/types'

export const mapNftFromRawNft = (rawNfts: RawNft[]) => {
  const nfts: Nft[] = rawNfts.map((rawNft: RawNft) => {
    return {
      contractAddress: rawNft.contract_address,
      tokenId: rawNft.token_id,
      name: rawNft.name,
      description: rawNft.description,
      fileUrl: rawNft.file_url,
      creatorAddress: rawNft.creator_address,
      imageUrl: rawNft.file_url,
    }
  })
  return nfts
}
