import React from "react";
import Product from "../../../models/Product";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";

interface Props {
  product: Product;
}

const ProductListItem: React.FC<Props> = ({ product }) => {
  return (
    <Box
      alignItems={{ md: "center" }}
      borderWidth={1}
      display={{ md: "flex" }}
      margin={2}
      maxWidth="32rem"
      p={4}
    >
      <Image
        alt={product.name}
        height={{ md: "300px" }}
        margin="auto"
        maxWidth={{ base: "400px", md: "200px" }}
        src={product.image}
      />

      <Stack
        align={{ base: "center", md: "stretch" }}
        ml={{ md: 6 }}
        mt={{ base: 4, md: 0 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Text
          color="teal.600"
          fontSize="lg"
          fontWeight="bold"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          {product.name}
        </Text>
        <Text color="gray.500" my={2}>
          {product.description}
        </Text>
        <Button maxWidth="150px" my={2} padding={2}>
          Select Product
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductListItem;
