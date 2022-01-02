import * as React from 'react'
import {LAMPORTS_PER_SOL} from '@solana/web3.js'
import {ConnectionContext} from '../contexts/connection'

function Balance() {
  const [balance, setBalance] = React.useState(0)
  const formattedBalance = balance / LAMPORTS_PER_SOL
  const {connection, wallet} = React.useContext(ConnectionContext)
  React.useEffect(() => {
    if (!connection || !wallet) {
      return
    }

    const getWalletBalance = async () => {
      try {
        const walletBalance = await connection.getBalance(wallet.publicKey)
        setBalance(walletBalance)
      } catch (err) {
        console.log(err)
      }
    }
    getWalletBalance()
  }, [connection, wallet])

  return (
    <div>
      <p>Balance: {formattedBalance}</p>
    </div>
  )
}

export {Balance}
