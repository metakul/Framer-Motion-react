import { useContract, useContractRead } from "@thirdweb-dev/react";

import mockData from "./mockData.json"


const Mywallet = () => {
  const { contract } = useContract("0x934f5A1c2636D0Fb8a3C511f0485928F92A05681");
  const { data, isLoading } = useContractRead(contract, "totalMinted")
  const svgStyle = {
    fill: '#5893f9', // Set your desired fill color here
    height: '1em',
  };
  return (
    <main className="pt-[3.5rem] lg:pt-8">
      <div className="relative">
        <img src="img/collections/collection_banner.jpg" alt="banner" className="h-[18.75rem] object-cover" />
      </div>
      <h2 className="mb-2 font-display text-4xl font-medium  dark:text-white"> Unstake NFT</h2>


    

      <section className="relative py-12">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
        </picture>
        <div className="container">
         

          <div className="tab-content">
            <div className="tab-pane fade show active" id="items" role="tabpanel" aria-labelledby="items-tab">
              <div className="mb-8 flex flex-wrap items-center justify-between">
                <div className="flex flex-wrap items-center">
                  <div className="my-1 mr-2.5">
                    <button
                      className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-jacarta-800 px-4 font-display text-sm font-semibold  transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                      id="blockchainFilter"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-4 w-4 fill-jacarta-300 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 14v2h2v-2H4zM18 4v2h2V4h-2zm0 14v2h2v-2h-2z"
                        />
                      </svg>
                      <span>Metakul Collection</span>
                    </button>
                    
                  </div>

                  <div className="my-1 mr-2.5">
                    <button
                      className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-jacarta-800 px-4 font-display text-sm font-semibold  transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                      id="categoriesFilter"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-4 w-4 fill-jacarta-300 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"
                        />
                      </svg>
                      <span>Web3</span>
                    </button>
                  
                  </div>
                  <div className="my-1 mr-2.5">
                    <button
                      className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-jacarta-800 px-4 font-display text-sm font-semibold  transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                      id="saleTypeFilter"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-4 w-4 fill-jacarta-300 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM13 10V5l-5 7h3v5l5-7h-3z"
                        />
                      </svg>
                      <span>Polygon</span>
                    </button>
                   
                  </div>
                  <div className="my-1 mr-2.5">
                    <button
                      className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-jacarta-800 px-4 font-display text-sm font-semibold  transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                      id="priceRangeFilter"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-4 w-4 fill-jacarta-300 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z"
                        />
                      </svg>
                      <span>Gasless</span>
                    </button>

                    
                  </div>
                </div>

             
              </div>

              <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
      {mockData.map((item, index) => (
        <article key={index}>
          <div className="block rounded-2.5xl border border-jacarta-100 bg-jacarta-800 p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
            <figure className="relative">
              <a href={item.itemLink}>
                <img
                  src={item.imageSrc}
                  alt={`item ${index + 1}`}
                  className="w-full rounded-[0.625rem]"
                  loading="lazy"
                />
              </a>
              <div
                        className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-jacarta-800 p-2 dark:bg-jacarta-700"
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
              <a href={item.itemLink}>
                <span className="font-display text-base hover:text-accent dark:text-white">
                  {item.title}
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
              <button
                className="font-display text-sm font-semibold text-accent"
                data-bs-toggle="modal"
                data-bs-target="#buyNowModal"
              >
                Buy now
              </button>
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
      ))}
    </div>
            </div>

          
          </div>
        </div>
      </section>
    </main>
  );
};

export default Mywallet;
