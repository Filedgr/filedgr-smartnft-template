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
