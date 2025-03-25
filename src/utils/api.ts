// src/utils/api.ts
export const fetchNFTs = async () => {
    const response = await fetch('https://api.example.com/nfts');
    return response.json();
  };
  
  export const fetchNFTDetails = async (id: string) => {
    const response = await fetch(`https://api.example.com/nfts/${id}`);
    return response.json();
  };
  