import * as React from 'react'
import {LAMPORTS_PER_SOL, PublicKey} from '@solana/web3.js'
import {ConnectionContext} from '../contexts/connection'

function Balance() {
  const {connection, wallet} = React.useContext(ConnectionContext)
  const [balance, setBalance] = React.useState(0)
  console.log('balance:', balance)
  const formattedBalance = balance / LAMPORTS_PER_SOL

  const getWalletBalance = async () => {
    if (!connection || !wallet) {
      return
    }

    try {
      const walletBalance = await connection.getBalance(wallet.publicKey)
      setBalance(walletBalance)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getWalletBalance()
  }, [connection, wallet])

  const airDropSol = async () => {
    if (!connection || !wallet) {
      return
    }
    try {
      const fromAirDropSignature = await connection.requestAirdrop(
        new PublicKey(wallet.publicKey),
        2 * LAMPORTS_PER_SOL,
      )
      await connection.confirmTransaction(fromAirDropSignature)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <p>Balance: {formattedBalance}</p>
      <button
        onClick={async () => {
          await airDropSol()
          await getWalletBalance()
        }}
      >
        Airdrop Sol
      </button>
    </div>
  )
}

export {Balance}
