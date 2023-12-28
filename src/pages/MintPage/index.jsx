import { FC, useEffect, useState } from "react";
import { Paper, Chip, Button, Typography } from "@mui/material";
import DotLoader from "react-spinners/DotLoader";

import {
  useContract,
  useAddress,
  ThirdwebNftMedia,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { Web3Button, useContractWrite } from "@thirdweb-dev/react";

import "./style.css";

import { Card, Timer, Timer1, MintButtonContainer, NftBoxGrid } from "./MintPage.css"

const myNftDropContractAddress = 0x710E9161e8A768c0605335AB632361839f761374
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Mint = () => {
  const address = useAddress();
  const [claimNft, setClaimNft] = useState(false)
  const { contract: nftDrop } = useContract(myNftDropContractAddress);


  const allowlistProof = {
    "proof": [],
    "quantityLimitPerWallet": "1",
    "pricePerToken": "0",
    "currency": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  }
  const { data: ownedNfts } = useOwnedNFTs(nftDrop, address);


  async function opensea(id) {
    const nft = id;
    console.log(`https://www.opensea.io/${myNftDropContractAddress}/${nft}`);
    window.open(
      `https://opensea.io/assets/matic/${myNftDropContractAddress}/${nft}`
    );
  }

  const { contract } = useContract("0x710E9161e8A768c0605335AB632361839f761374");
  const { mutateAsync: claim, isLoading } = useContractWrite(contract, "claim")

  const handleClaimNft = async () => {
    try {
      setClaimNft(true)
      console.log("starting")
      const data = await claim({ args: [address, 1, "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", 0, allowlistProof, []] });
      console.info("contract call successs", data);
      setClaimNft(false)
    } catch (err) {
      console.error("contract call failure", err);
      setClaimNft(false)
    }
  }



  return (
    <div className="featuredlaunch_container">
      <div
        className="featuredlaunch_rightCol"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h1">

          MetaKul NFT Mint
        </Typography>
        <img
          src="https://media.discordapp.net/attachments/954642077340278825/1019585636375732285/6tckjj.gif"
          alt="NFT"
          width="300px"
        />
        <MintButtonContainer>
          <div style={{ marginTop: "10px" }}>
            {claimNft ? (
              <div>
                <DotLoader
                  loading={claimNft}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) :
              (
                <button className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold  shadow-accent-volume transition-all hover:bg-accent-dark"
                  onClick={handleClaimNft}> Claim NFT</button>
              )

            }


          </div>
        </MintButtonContainer>
      </div>
      <div
        className="featuredlaunch_leftCol "
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          alignItems: "center",
        }}
      >
        <div className=" containerMint">

          <h3>Your Owned NFT</h3>
          <p style={{ marginTop: "0px", fontWeight: "bold" }}>
            ( Will Load After Mint )
          </p>
          <NftBoxGrid>
            {ownedNfts?.map((nft) => (
              <div
                key={nft.metadata.id.toString()}
                className=""
              >
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className="nftMedia"
                />
                <h3
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {nft.metadata.name}
                </h3>
                <Button
                  onClick={() => opensea(nft.metadata.id)}
                  className="mainButton"
                >
                  View on Opensea
                </Button>
              </div>
            ))}
          </NftBoxGrid>
        </div>

        <div className="featuredlaunch_clipboard">
          <div className="featuredlaunch_box">
            <span>METAKUL SUPPLY</span>
            <div className="featuredlaunch_quantity">777 NFT<br />7777 Metaverse Land</div>
          </div>
          <div className="featuredlaunch_box">
            <span>EARLY BIRD PRICE</span>
            <div className="featuredlaunch_quantity">FREE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
