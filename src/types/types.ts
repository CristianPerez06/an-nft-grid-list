export interface RawMetaDataAttributes {
  display_type: string
  trait_type: string
  value: number
}

export interface RawMetaData {
  attributes: RawMetaDataAttributes[]
  background_image: string
  description: string
  image: string
  image_url: string
  is_normalized: boolean
  name: string
  name_length: number
  segment_length: number
  url: string
  version: number
}

export interface RawNft {
  contract_address: string
  token_id: string
  name: string
  description: string
  file_url: string
  animation_url: string
  cached_file_url: string
  cached_animation_url: string
  creator_address: string
  metadata: RawMetaData
  metadata_url: string
}

export interface Nft {
  contractAddress: string
  tokenId: string
  name: string
  description: string
  fileUrl: string
  creatorAddress: string
  imageUrl: string
}
