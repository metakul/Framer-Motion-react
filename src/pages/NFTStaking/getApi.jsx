import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@mui/material';
import { FetchMynfts } from './getApi';

const FetchMyNFTs = () => {
  const [mynfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchMynfts()
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setNfts(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching NFTs:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h5">My NFTs</Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container spacing={2}>
          {mynfts.map((nft, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              {/* Render your NFT card here */}
              {/* You can use the existing NFTCard, Image, NFTName components */}
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default FetchMyNFTs;
