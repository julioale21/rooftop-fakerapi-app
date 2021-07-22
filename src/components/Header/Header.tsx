import React from "react";
import { Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Stack
      backgroundColor="#055052"
      direction="row"
      height="70px"
      justifyContent="space-between"
      width="100%"
    >
      <Stack alignItems="center" justifyContent="center" marginLeft={5}>
        <Image
          src="https://www.rooftopacademy.com/98c9314de52c2a2ad48e22a2d1431531.png"
          width={150}
        />
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        height="100%"
        justifyContent="flex-end"
        paddingX={10}
        width="100%"
      >
        <Stack fontSize={{ base: "1.2rem", md: "1.5rem" }} fontWeight="bold" marginRight={4}>
          <Link to="/products">Products</Link>
        </Stack>
        <Stack fontSize={{ base: "1.2rem", md: "1.5rem" }} fontWeight="bold">
          <Link to="/users">Users</Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
