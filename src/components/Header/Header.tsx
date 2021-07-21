import { Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Stack backgroundColor="red" height="80px" width="100%">
      <Stack
        alignItems="center"
        direction="row"
        height="100%"
        justifyContent="flex-end"
        paddingX={10}
        width="100%"
      >
        <Stack fontSize="1.5rem" fontWeight="bold" marginRight={4}>
          <Link to="/products">Products</Link>
        </Stack>
        <Stack fontSize="1.5rem" fontWeight="bold">
          <Link to="/users">Users</Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
