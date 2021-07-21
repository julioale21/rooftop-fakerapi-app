import React from "react";
import { Stack, Image, Text, Grid, Center, Spacer } from "@chakra-ui/react";
import User from "../../models/User";
import TextInfo from "../shared/TextInfo";

interface Props {
  user: User;
}

const UserListItem: React.FC<Props> = ({ user }) => {
  return (
    <Stack border="1px solid gray" paddingY={5}>
      <Stack direction="row" justifyContent="center">
        <Image borderRadius="full" height={150} src={user.image} width={150} />
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Text fontSize="1.5rem" fontWeight="bold" marginTop={3} textColor="gray.500">
          {user.username}
        </Text>
      </Stack>
      <Spacer />
      <Grid gap={2} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
        <Center>
          <TextInfo title="First Name" value={user.firstname} />
        </Center>
        <Center>
          <TextInfo title="Last Name" value={user.lastname} />
        </Center>
        <Center>
          <TextInfo title="Email" value={user.email} />
        </Center>
        <Center>
          <TextInfo title="Web Site" value={user.website} />
        </Center>
      </Grid>
    </Stack>
  );
};

export default UserListItem;
