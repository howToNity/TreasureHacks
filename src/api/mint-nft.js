export async function mintNFT({ config, address, }) {
  const traitsType = Object.keys(config)
  const traitsValue = Object.values(config)
  const data = Array.from(traitsType, (key, index) => {
    return {
      trait_type: key,
      value: traitsValue[index]
    }
  })
  const userObject = {
    name: 'W3GAME_AVATAR',
    description: 'Your avatar for web3 game',
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
    const res = await req.json()
    console.log(res)
    if (req.ok) {
      alert('Successfully minted an NFT')
    }
  } catch (err) { console.error(err) }
}
