import { FC, useEffect, useState } from "react";
import {  Paper,  Chip, Button } from "@mui/material";

import {
  useContract,
  useAddress,
  ThirdwebNftMedia,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";

import "./style.css";

import {Card, Timer,Timer1,MintButtonContainer,NftBoxGrid} from "./MintPage.css"

const myNftDropContractAddress = "0x710E9161e8A768c0605335AB632361839f761374";



const Mint = () => {
  const address = useAddress();
  const { contract: nftDrop } = useContract(myNftDropContractAddress);

  
  const allowlistProof=  { 
    "proof": [], 
    "quantityLimitPerWallet": "1", 
    "pricePerToken": "0", 
    "currency": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" 
 }
  const { data: ownedNfts } = useOwnedNFTs(nftDrop, address);

  async function opensea(id) {
    const nft = id + 1;
    console.log(`https://www.opensea.io/${myNftDropContractAddress}/${nft}`);
    window.open(
      `https://opensea.io/assets/matic/${myNftDropContractAddress}/${nft}`
    );
  }

 

  return (
    <div className="featuredlaunch_container">
      <div
        className="featuredlaunch_rightCol"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="featuredLaunch_name HeadingText">
          MetaKul NFT Mint
        </div>
        <img
          src="https://media.discordapp.net/attachments/954642077340278825/1019585636375732285/6tckjj.gif"
          alt="NFT"
          width="300px"
        />
        <MintButtonContainer>
          <div style={{ marginTop: "10px" }}>
          <Web3Button
      contractAddress="0x710E9161e8A768c0605335AB632361839f761374"
      action={(contract) => {
        contract.call("claim", [address, 1,"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",0,allowlistProof,[]])
      }}
    >
      Claim Gasless NFT
    </Web3Button>
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
          <div style={{ marginBottom: "55px", padding: "0 16px" }}>
            <renderCounter></renderCounter>
            <h4 style={{ marginBottom: "5px" }}>
              Please follow the steps to switch to Polygon’s Mainnet:
            </h4>
            <h4 style={{ marginBottom: "5px" }}>
              1. Navigate to{" "}
              <a style={{ color: "green" }} href="https://polygonscan.com/">
                polygonscan.com{" "}
              </a>
            </h4>
            <h4>2. Scroll down to the bottom of the page and click on the button Add Polygon Network</h4>
          </div>
          <h3>Your Owned NFT</h3>
          <p style={{ color: "white", marginTop: "0px", fontWeight: "bold" }}>
            ( Will Load After Mint )
          </p>
          <NftBoxGrid>
            {ownedNfts?.map((nft) => (
              <div
                key={nft.metadata.id.toString()}
                className="nftBox"
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
