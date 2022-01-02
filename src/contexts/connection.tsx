import * as React from 'react'
import {Connection, clusterApiUrl, Keypair} from '@solana/web3.js'

import {secretKey} from '../keypair'

export const ConnectionContext = React.createContext<{
  connection: Connection | undefined
  wallet: Keypair | undefined
}>({connection: undefined, wallet: undefined})

export const ConnectionProvider = ({children}: {children: React.ReactNode}) => {
  const [connection, setConnection] = React.useState<Connection | undefined>(
    undefined,
  )
  const [wallet, setWallet] = React.useState<Keypair | undefined>(undefined)
  React.useEffect(() => {
    try {
      const getConnection = async () => {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed') //Creates a connection object that’ll be used to get the balance
        const wallet = await Keypair.fromSecretKey(secretKey)
        setConnection(connection)
        setWallet(wallet)
      }
      getConnection()
    } catch (error) {
      console.error(error)
    }
  }, [])
  return (
    <ConnectionContext.Provider value={{connection, wallet}}>
      {children}
    </ConnectionContext.Provider>
  )
}
