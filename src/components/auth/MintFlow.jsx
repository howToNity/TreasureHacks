import { useContext, useState } from 'react';
import { mintNFT } from '../../api/mint-nft';
import { useWallet } from '../../hooks/useWallet';
import { AvatarPickerContext } from '../../context/AvatarPickerContext';
import confetti from 'canvas-confetti'

export function MintFlow() {
  const [disabled, setDisabled] = useState(false)
  const { address, getAddress } = useWallet();
  const { config } = useContext(AvatarPickerContext)

  return (
    <div className="py-24">
      <h3 className="font-semibold text-white text-xl leading-tight mb-4">
        Quick start the game by creating your own NFT avatar
      </h3>
      {address ? (
        <div>
          <WalletButton disabled={disabled} onClick={async () => {
            setDisabled(true)
            await mintNFT({
              address,
              config
            })
            setDisabled(false)
            confetti()
          }}>Mint your Avatar</WalletButton>
        </div>
      ) : (
        <div>
          <WalletButton onClick={getAddress}>Connect with MetaMask</WalletButton>
        </div>
      )}
    </div>
  );
}

const WalletButton = ({ children, ...rest }) => (
  <button className="bg-white py-4 px-8 rounded" {...rest}>
    {children}
  </button>
);
