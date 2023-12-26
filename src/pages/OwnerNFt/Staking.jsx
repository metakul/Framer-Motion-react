
import mockData from "./mockData.json"
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useAddress } from "@thirdweb-dev/react";
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import React, { useState, useEffect } from 'react';
import { Web3Button } from "@thirdweb-dev/react";
import { Button, useTheme } from "@mui/material";
// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK("polygon", {
  clientId: "ed7a4b64885c72be1dc347066f4e51ce",
});

const contract = await sdk.getContract("0x710E9161e8A768c0605335AB632361839f761374");

const Mywallet = () => {
  const walletAddress = useAddress();
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const { stakingcontract } = useContract("0x7615Cc203dDe705bFD65C42CEAcA7e15eB41b11b");
  const theme=useTheme()
  const { mutateAsync: stake, isLoading } = useContractWrite(stakingcontract, "stake")
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const nfts = await contract.erc721.getOwned(walletAddress);
        setBalance(nfts);
        setLoading(false); // Set loading to false once data is fetched
        console.log("Balance:", nfts);
      } catch (error) {
        console.error("Error fetching balance:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    // Check if walletAddress is not null before fetching balance
    if (walletAddress !== null && contract) {
      setLoading(true); // Set loading to true before fetching data
      fetchBalance();
    }
  }, [walletAddress, contract]);


  const callStaking = async (tokenId) => {
    try {
      console.log(tokenId)
      const data = await stake({ args: [tokenId] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  return (
    <main className="pt-[3.5rem] lg:pt-8">
      <h2 className="mb-2 font-display text-4xl font-medium  dark:text-white"> NFT Staking</h2>



      <section className="relative py-12">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
        </picture>
        <div className="container">


          <div className="tab-content">
            <div className="tab-pane fade show active" id="items" role="tabpanel" aria-labelledby="items-tab">
              <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                {loading ? (
                  <div className="text-center">Loading...</div>
                ) : balance && balance.length > 0 ? (
                  balance.map((item, index) => (
                    <article key={index}>
                      <div className="block rounded-2.5xl border border-jacarta-100  p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700" style={{backgroundColor:theme.palette.colors.colors.primary[900]}}>
                        <figure className="relative">
                          <a href={item.metadata.name}>
                            <img
                              src={item.metadata.image}
                              alt={`item ${index + 1}`}
                              className="w-full rounded-[0.625rem]"
                              loading="lazy"
                            />
                          </a>
                          <div
                            className="absolute top-3 right-3 flex items-center space-x-1 rounded-md  p-2 dark:bg-jacarta-700"
                          >
                            <span
                              className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                              data-tippy-content="Favorite"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                              >
                                <path fill="none" d="M0 0H24V24H0z" />
                                <path
                                  d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                                />
                              </svg>
                            </span>
                            <span className="text-sm dark:text-jacarta-200">188</span>
                          </div>
                        </figure>
                        <div className="mt-7 flex items-center justify-between">
                          <a href={item.metadata.name}>
                            <span className="font-display text-base hover:text-accent dark:text-white">
                              {item.metadata.name}
                            </span>
                          </a>
                          <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                            <a
                              href="#"
                              className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                              role="button"
                              id="itemActions2"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <svg
                                width="16"
                                height="4"
                                viewBox="0 0 16 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-jacarta-500 dark:fill-jacarta-200"
                              >
                                <circle cx="2" cy="2" r="2" />
                                <circle cx="8" cy="2" r="2" />
                                <circle cx="14" cy="2" r="2" />
                              </svg>
                            </a>
                            {/* <div
                          className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-jacarta-800 py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                          aria-labelledby="itemActions2"
                        >
                          <button
                            className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                          >
                            New bid
                          </button>
                          <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                          <button
                            className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                          >
                            Refresh Metadata
                          </button>
                          <button
                            className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                          >
                            Share
                          </button>
                          <button
                            className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                          >
                            Report
                          </button>
                        </div> */}
                          </div>

                        </div>
                        <div className="mt-8 flex items-center justify-between">
                          <Web3Button
                            contractAddress="0x7615Cc203dDe705bFD65C42CEAcA7e15eB41b11b"
                            action={(contract) => {
                              contract.call("stake", [[32]])
                            }}
                          >
                            stake
                          </Web3Button>

                          <a href={item.historyLink} className="group flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                            >
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path
                                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"
                              />
                            </svg>
                            <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                              View History
                            </span>
                          </a>
                        </div>
                      </div>
                    </article>

                  ))
                ) : (
                  <>
                    <article>
                      <div style={{background:theme.palette.colors.colors.primary[900]}} className="block rounded-2.5xl border border-jacarta-100  p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700" >
                        <figure className="relative">
                          <img
                            src="./img/products/item_3.jpg"
                            alt="img"
                            className="w-full rounded-[0.625rem]"
                            loading="lazy"
                          />
                          <div style={{background:theme.palette.colors.colors.primary[500]}}
                            className="absolute top-3 right-3 flex items-center space-x-1 rounded-md  p-2 dark:bg-jacarta-700"
                          >
                            <span
                              className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                              data-tippy-content="Favorite"
                            >

                            </span>
                          </div>
                        </figure>
                        <div className="mt-7 flex items-center justify-between">
                          <span className="font-display text-base hover:text-accent dark:text-white">
                            No Nfts to Stake.
                          </span>
                          <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                            <a
                              href="#"
                              className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                              role="button"
                              id="itemActions2"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                            </a>

                          </div>

                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-display text-base hover:text-accent dark:text-white">
                            Join discord to Get your first gasless nft.
                          </span>


                        </div>
                        <div className="mt-8 flex items-center justify-between">
                          <button
                            className="font-display text-sm font-semibold text-accent"
                            data-bs-toggle="modal"
                            data-bs-target="#buyNowModal"
                          >
                            Buy One Now
                          </button>
                          <div
                            className="font-display text-sm font-semibold text-accent"
                            data-bs-toggle="modal"
                            data-bs-target="#buyNowModal"
                          >
                            Buy One Now
                          </div>

                        </div>
                      </div>
                    </article>
                  </>
                )}
              </div>

            </div>
          </div>


        </div>
      </section>
    </main >
  );
};

export default Mywallet;



