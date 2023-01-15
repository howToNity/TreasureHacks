export function mintNFT() {
  const traitsType = Object.keys(config)
  const traitsValue = Object.values(config)
  const data = Array.from(traitsType, (key, index) => {
    return {
      trait_type: key,
      value: traitsValue[index]
    }
  })
  const userObject = {
    chain: 'polygon',
    recipientAddress: address,
    data: JSON.stringify(data)
  }
  try {
      const req = await fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata', {
        method: 'POST',
        headers: {
          'X-API-KEY': import.meta.env.VITE_VERBWIRE_API_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
      })
      if (req.ok) {
        alert('Successfully minted an NFT')
      }
    } catch (err) { console.error(err) }
}