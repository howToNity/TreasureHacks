const API_KEY = import.meta.env.VITE_VERBWIRE_API_KEY
const options = {
  method: 'GET',
  headers: {
    'X-API-Key': API_KEY,
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

const contract = import.meta.env.VITE_VERBWIRE_CONTRACT_ADDRESS

export async function getAvatar(address) {
  try {
    const { nfts } = await fetch(`https://api.verbwire.com/v1/nft/data/owned?walletAddress=${address}&chain=polygon`, options).then(r => r.json())
    if (!nfts) return
    const nft = nfts.filter(nft => nft.tokenName === 'QuickMintVW')
    const tokenID = nft[0]?.tokenID
    if (!tokenID) return
    const { nft_details } = await fetch(`https://api.verbwire.com/v1/nft/data/nftDetails?contractAddress=${contract}&tokenId=${tokenID}&chain=polygon`, options).then(r => r.json())
    console.log(nft_details.tokenURI)
    const { attributes } = await fetch(nft_details.tokenURI).then(r => r.json())
    const arr = attributes.map(attr => ({ [attr.trait_type]: attr.value }))
    const finalObj = {}
    for (let i = 0; i < arr.length; i++) {
      Object.assign(finalObj, arr[i]);
    }
    return finalObj
  } catch (err) { console.error(err) }
}