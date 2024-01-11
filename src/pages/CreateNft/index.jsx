import React, { useEffect, useState, useRef } from "react";


import * as s from "./Marketplace.css";
import Marketplace from './Marketplace.json';
import { uploadFileToIPFS, uploadJSONToIPFS } from "../../script/ipfs";
import { Box, Button, Typography } from "@mui/material";
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';

function Home() {

    const [formParams, updateFormParams] = useState({ name: '', description: '', price: '' });
    const [fileURL, setFileURL] = useState(null);
    const [metadataURL, setmetadataURL] = useState(null);
    const ethers = require("ethers");
    const [message, updateMessage] = useState('');
    const [imgMessage, updateImgMessage] = useState('');

    const [imgUploaded, setImgUploaded] = useState(false)
    const [jsonUploaded, setjsonUploaded] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);


    async function OnChangeFile(e) {
        const file = e.target.files[0];
        updateImgMessage("Uploading...");
        const filePreviewUrl = URL.createObjectURL(file);
        setSelectedFile(filePreviewUrl);

        
        //check for file extension
        try {
            //upload the file to IPFS
            const response = await uploadFileToIPFS(file);
            if (response.success === true) {
                console.log("Uploaded image to Pinata: ", response.pinataURL)
                setFileURL(response.pinataURL);
                setImgUploaded(true)
            }
            updateImgMessage("uploaded successfully to IPFS at",)
        }
        catch (e) {
            console.log("Error during file upload", e);
            updateImgMessage("Error during file upload")
        }
    }


    //This function uploads the metadata to IPFS
    async function uploadMetadataToIPFS() {
        const { name, description, price } = formParams;
        //Make sure that none of the fields are empty
        if (!name || !description || !price || !fileURL)
            return false;

        const nftJSON = {
            name, description, price, image: fileURL
        }

        try {
            //upload the metadata JSON to IPFS
            const response = await uploadJSONToIPFS(nftJSON);
            if (response.success === true) {
                console.log("Uploaded JSON to Pinata: ", response)
                return response.pinataURL;
            }
        }
        catch (e) {
            console.log("error uploading JSON metadata:", e)
        }
    }


    async function listNFT(e) {
        e.preventDefault();

        //Upload data to IPFS
        try {
            updateMessage("Please wait.. uploading (upto 5 mins)")
            const metadataURL = await uploadMetadataToIPFS();
            //After adding your Hardhat network to your metamask, this code will get providers and signers

            // //Pull the deployed contract instance
            // let contract = new ethers.Contract(Marketplace.address, Marketplace.abi, signer)

            // //massage the params to be sent to the create NFT request
            // const price = ethers.utils.parseUnits(formParams.price, 'ether')
            // let listingPrice = await contract.getListPrice()
            // listingPrice = listingPrice.toString()

            // //actually create the NFT
            // let transaction = await contract.createToken(metadataURL, price, { value: listingPrice })
            // await transaction.wait()
            if (metadataURL != false) {
                setmetadataURL(metadataURL)
                updateMessage("Successfully uploaded your NFT! to IPFS at",);
                updateFormParams({ name: '', description: '', price: '' });
                setjsonUploaded(true)
            }
            else {
                updateMessage("Error Uploading NFT Metadata, please check all feilds",);
            }
        }
        catch (e) {
            alert("Upload error" + e)
            updateMessage("Error Uploading NFT");
        }
    }

    return (
        <>
            <s.ResponsiveWrapper flex={1} test>
                <h1>Create New Item</h1>
                <s.TextInfo> * Required fields</s.TextInfo>
                <s.TextSubTitle>Image, Video, Audio, or 3D Model *</s.TextSubTitle>
                <s.TextInfo> File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</s.TextInfo>
                <s.UploadLabel htmlFor="fileid" style={{ margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
            
                {selectedFile ? (
                    <img alt="Uploaded Preview" src={selectedFile} style={{ maxWidth: '100%', maxHeight: '300px' }} />
                ) : (
                    <s.StyledLogo alt={"Demo Image"} src={"/img/metakul_logo.png"} />
                )}
             
            </s.UploadLabel>
                {imgMessage ? (
                    <Box sx={{
                        backgroundColor: (theme) => theme.palette.colors.colors.green[900],
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        margin: "15px 20%"
                    }}>
                        <Button>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: (theme) => theme.palette.text.secondary,
                                }}
                            >
                                {imgMessage}
                            </Typography>
                        </Button>
                        {imgUploaded && (
                                 <Button>

                                 <a style={{ marginLeft: "20px", }} href={fileURL} target="_blank">
                                     <PreviewOutlinedIcon
                                         viewBox="0 0 24 24"
                                         className="h-6 w-6"
                                         sx={{
                                             color: (theme) => theme.palette.text.secondary,
                                         }}
                                     />
                                     <Typography
                                         variant="h5"
                                         sx={{
                                             color: (theme) => theme.palette.text.secondary,
                                         }}
                                     >
                                         View Now
                                     </Typography>
                                 </a>
                             </Button>
                        )}
                       
                    </Box>
                ) : (
                    <Button >
                    </Button>
                )}
                <s.UploadInput onChange={OnChangeFile} type="file" name="file" id="fileid" />
                <s.TextSubTitle>Name *</s.TextSubTitle>
                <s.nftInput type="text" name="name" placeholder="Item Name" onChange={e => updateFormParams({ ...formParams, name: e.target.value })} value={formParams.name} />
                <s.TextSubTitle>External link</s.TextSubTitle>
                <s.TextInfo>Metakul will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</s.TextInfo>
                <s.nftInput type="text" name="externallink" placeholder="https://yoursite.io/" value={formParams.externallink} onChange={e => updateFormParams({ ...formParams, externallink: e.target.value })} />
                <s.TextSubTitle>Description</s.TextSubTitle>
                <s.TextInfo>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</s.TextInfo>
                <s.nftInput type="text" name="description" placeholder="Description" value={formParams.description} onChange={e => updateFormParams({ ...formParams, description: e.target.value })} />
                <s.TextSubTitle>Price</s.TextSubTitle>
                <s.nftInput type="number" name="price" placeholder="Price" value={formParams.price} onChange={e => updateFormParams({ ...formParams, price: e.target.value })} />
                <s.TextSubTitle>Collection</s.TextSubTitle>
                <s.nftInput type="text" name="collection" placeholder="Collection Name" value={formParams.collection} onChange={e => updateFormParams({ ...formParams, collection: e.target.value })} />
                <s.StyledButton onClick={listNFT} className="">
                    Create NFT
                </s.StyledButton>


                {message ? (
                    <Box sx={{
                        backgroundColor: (theme) => theme.palette.colors.colors.green[900],
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        margin: "15px 20%"
                    }}>
                        <Button>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: (theme) => theme.palette.text.secondary,
                                }}
                            >
                                {message}
                            </Typography>
                        </Button>
                        {jsonUploaded && (
                            <Button>
                                <a style={{ marginLeft: "20px", }} href={metadataURL} target="_blank">
                                    <PreviewOutlinedIcon
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                        sx={{
                                            color: (theme) => theme.palette.text.secondary,
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: (theme) => theme.palette.text.secondary,
                                        }}
                                    >
                                        View Now
                                    </Typography>
                                </a>

                            </Button>
                        )}
                    </Box>
                ) : (
                    <Button >
                    </Button>
                )}


            </s.ResponsiveWrapper>



        </>

    );
}

export default Home;