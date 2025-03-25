// tests/NFTCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import NFTCard from '../src/app/components/NFTCard';

test('renders NFT card and adds to cart', () => {
  const mockAddToCart = jest.fn();
  const nft = { id: '1', title: 'NFT Title', imageUrl: 'https://example.com/image.jpg', description: 'NFT Description' };

  render(<NFTCard nft={nft} onAddToCart={mockAddToCart} />);

  expect(screen.getByText('NFT Title')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Adicionar ao Carrinho'));
  expect(mockAddToCart).toHaveBeenCalledWith(nft);
});
