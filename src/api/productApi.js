const BASE_URL = "https://localhost:7278/api/ProductOrder";

export const getProducts = () =>
  fetch(BASE_URL).then((r) => {
    if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
    return r.json();
  });

export const createProduct = (body) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

export const deleteProduct = (id) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

export const updateProduct = (id, body) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

export const patchProduct = (id, body) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });


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