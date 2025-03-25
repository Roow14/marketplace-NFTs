// src/app/pages/index.tsx
import { useQuery } from 'react-query';
import { fetchNFTs } from '../../utils/api';
import NFTCard from '../components/NFTCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const HomePage = () => {
  const { data, error, isLoading } = useQuery('nfts', fetchNFTs);
  const dispatch = useDispatch();

  const handleAddToCart = (nft: any) => {
    dispatch(addToCart(nft));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading NFTs</p>;

  return (
    <div className="nft-list">
      {data?.map((nft: any) => (
        <NFTCard key={nft.id} nft={nft} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default HomePage;
