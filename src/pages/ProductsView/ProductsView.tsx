/* eslint-disable no-console */
import { Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/layout";
import axios from "axios";
import Product from "../../models/Product";
import { ProductList, Pagination } from "../../components";

const productsURL = "https://fakerapi.it/api/v1/products?_quantity=100";

const ProductsView: React.FC = () => {
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);
  const [productsPerPage] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(productsURL);
        const productsList: Product[] = response.data.data;
        const paginatedProducts: Product[] = productsList.slice(offset, offset + productsPerPage);

        setPaginatedProducts(paginatedProducts);
        setPageCount(Math.ceil(productsList.length / productsPerPage));
        setCurrentPage(offset / productsPerPage);
      } catch (error) {
        console.log(error);
        setPaginatedProducts([]);
      }
    }
    fetchProducts();
  }, [offset, productsPerPage]);

  const handleNextPage = () => {
    setOffset(offset + productsPerPage);
  };

  const handlePrevPage = () => {
    setOffset(offset - productsPerPage);
  };

  return (
    <Stack>
      <Text fontSize="2rem" marginY={6} textAlign="center">
        Product List
      </Text>
      <ProductList products={paginatedProducts} />
      {paginatedProducts.length && (
        <Pagination
          handleNext={handleNextPage}
          handlePrev={handlePrevPage}
          page={currentPage}
          pageCount={pageCount}
        />
      )}
    </Stack>
  );
};

export default ProductsView;
