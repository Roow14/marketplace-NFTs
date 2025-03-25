// src/components/NFTCard.tsx
'use client'; // Marca este componente como Client Component

import React from 'react';

interface NFTProps {
  nft: { id: number; name: string; imageUrl: string };
}

const NFTCard: React.FC<NFTProps> = ({ nft }) => {
  return (
    <div>
      <img src={nft.imageUrl} alt={nft.name} />
      <h2>{nft.name}</h2>
    </div>
  );
};

export default NFTCard;
