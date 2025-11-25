import axios from "axios";

const BASE_URL = "https://localhost:7278/api/ProductOrder";

export const getProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createProduct = async (body) => {
  const response = await axios.post(BASE_URL, body);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export const updateProduct = async (id, body) => {
  const response = await axios.put(`${BASE_URL}/${id}`, body);
  return response.data;
};

export const patchProduct = async (id, body) => {
  const response = await axios.patch(`${BASE_URL}/${id}`, body);
  return response.data;
};


  // Edit Product
  // Search
  // Filter
  // Sorting
  // Loading State
  // Pagination
  // Loading State
  // Error Handling
  // Environment Variables
  // Axios instead of fetch
  // React Router
  // Reusable Component
  // Image Upload