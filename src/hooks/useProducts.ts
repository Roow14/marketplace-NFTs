import { useQuery } from '@tanstack/react-query';

// Função para buscar os produtos da API
const fetchProducts = async () => {
  const response = await fetch('https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products');
  if (!response.ok) throw new Error('Error fetching products');
  const result = await response.json();
  return result.data; // Supondo que 'data' seja a chave que contém o array
};

// Hook customizado para buscar os produtos
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
