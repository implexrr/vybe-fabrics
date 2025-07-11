// Fetches products from the mock shop API
const fetchProducts = async () => {
  const endpoint = "https://mock.shop/api?query={products(first:%2030){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}";
  try {
    const request = await fetch(endpoint, { mode: 'cors' });
    if (request.status >= 400) throw new Error("server error");
    const response = await request.json();
    return response.data.products.edges;
  }
  catch (err) {
    if (err instanceof Error) throw new Error(err.message);
  }
};

export default fetchProducts;