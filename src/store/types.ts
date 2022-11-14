import { Field, Message, Type } from 'protobufjs'

export interface TokenState {
  nftName: string
  transactionTokenName: string
}

export interface AccountState {
  issuer: string
  custody: string
}

export interface RootState {
  tokenState: TokenState
  accountState: AccountState
}

@Type.d('Nft')
export class Nft extends Message<Nft> {
  @Field.d(1, 'string')
  public id = ''

  @Field.d(2, 'string')
  public campaign = ''

  @Field.d(3, 'string')
  public uri = ''
}
