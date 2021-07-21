/* eslint-disable no-console */
import { Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/layout";
import axios from "axios";
import Product from "../../models/Product";
import ProducList from "../../components/products/ProducList";

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
      <Text fontSize="2rem" marginY={6} textAlign="center">
        Product List
      </Text>
      <ProducList products={products} />
    </Stack>
  );
};

export default ProductsView;
