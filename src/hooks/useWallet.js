import { useEffect, useState } from "react"

export function useWallet() {
  const isMetaMaskAvailable = typeof window.ethereum !== 'undefined' && ethereum.isMetaMask
  const [address, setAddress] = useState(isMetaMaskAvailable ? ethereum.selectedAddress : null)


  const getAddress = async () => {
    if (isMetaMaskAvailable) {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setAddress(accounts[0])
    }
  }

  useEffect(() => {
    if (isMetaMaskAvailable) {
      ethereum.on('accountsChanged', (accounts) => {
        setAddress(accounts[0])
      })
    }
  }, [window.ethereum])

  return {
    address,
    getAddress
  }
}
