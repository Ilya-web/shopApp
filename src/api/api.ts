import axios from './apiClient';

export function fetchProducts(category: string | undefined) {
  const url = category ? `/category/${category}` : '';
  return axios.get(`/products${url}`);
}

export function fetchSingleProduct(id: string) {
  return axios.get(`/products/${id}`);
}

export function fetchCategory() {
  return axios.get(`/products/categories`);
}
