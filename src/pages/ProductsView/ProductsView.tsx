/* eslint-disable no-console */
import { Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../models/Product";

const productsURL = "https://fakerapi.it/api/v1/products";

const ProductsView: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(productsURL);

        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
        setProducts([]);
      }
    }
    fetchProducts();
  }, []);

  return (
    <Stack>
      <h1>Products</h1>
    </Stack>
  );
};

export default ProductsView;
