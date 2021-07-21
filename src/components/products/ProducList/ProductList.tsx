import React from "react";
import { Container, Grid } from "@chakra-ui/react";
import ProductListItem from "../ProductListItem";
import Product from "../../../models/Product";

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Container centerContent maxW="80rem">
      <Grid gap={3} templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(3, 1fr)" }}>
        {products.map(function (product) {
          return <ProductListItem key={product.upc} product={product} />;
        })}
      </Grid>
    </Container>
  );
};

export default ProductList;
