import {
    ThirdwebNftMedia,
    useContract,
    useNFT,
    Web3Button,
  } from "@thirdweb-dev/react";
  import styles from "./style.css"


  const nftDropContractAddress = "0x710E9161e8A768c0605335AB632361839f761374"
  const tokenContractAddress = "0xE9fd323D7B1e4cFd07C657E218F7da16efd6532f"
  const stakingContractAddress = "0x7615Cc203dDe705bFD65C42CEAcA7e15eB41b11b"
  

  
  const NFTCard = ({ tokenId }) => {
    const { contract } = useContract(nftDropContractAddress, "nft-drop");
    const { data: nft } = useNFT(contract, tokenId);
  
    return (
      <>
        {nft && (
          <div className={styles.nftBox}>
            {nft.metadata && (
              <ThirdwebNftMedia
                metadata={nft.metadata}
                className={styles.nftMedia}
              />
            )}
            <h3>{nft.metadata.name}</h3>
            <Web3Button
              action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
              contractAddress={stakingContractAddress}
            >
              Withdraw
            </Web3Button>
          </div>
        )}
      </>
    );
  };
  export default NFTCard;
  