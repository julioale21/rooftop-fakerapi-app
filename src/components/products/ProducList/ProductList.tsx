import React from "react";
import { Grid, Stack } from "@chakra-ui/react";
import { ProductListItem } from "../../../components";
import Product from "../../../models/Product";

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Stack paddingX={5} width="100%">
      <Grid
        gap={3}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
      >
        {products.map(function (product) {
          return <ProductListItem key={product.upc} product={product} />;
        })}
      </Grid>
    </Stack>
  );
};

export default ProductList;
