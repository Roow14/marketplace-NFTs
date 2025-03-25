// src/app/pages/nft/[id].tsx
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchNFTDetails } from '../../utils/api';

const NftDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useQuery(['nft', id], () => fetchNFTDetails(id as string));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading NFT details</p>;

  return (
    <div className="nft-details">
      <h1>{data?.title}</h1>
      <img src={data?.imageUrl} alt={data?.title} />
      <p>{data?.description}</p>
    </div>
  );
};

export default NftDetailsPage;
