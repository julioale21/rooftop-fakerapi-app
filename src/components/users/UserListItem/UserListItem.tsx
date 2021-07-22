import React from "react";
import { Stack, Image, Text } from "@chakra-ui/react";
import User from "../../../models/User";
import { TextInfo } from "../../../components";

interface Props {
  user: User;
}

const UserListItem: React.FC<Props> = ({ user }) => {
  return (
    <Stack border="1px solid gray" direction="row" justifyContent="space-between" paddingY={5}>
      <Stack alignItems="center" padding={3} paddingLeft={{ base: 10, md: 20 }} width="35%">
        <Image
          borderRadius="full"
          height={{ base: 70, md: 150 }}
          src={user.image}
          width={{ base: 70, md: 150 }}
        />
        <Text
          fontSize={{ base: "0.8rem", md: "1.5rem" }}
          fontWeight="bold"
          marginTop={3}
          textColor="gray.500"
        >
          {user.username}
        </Text>
      </Stack>
      <Stack alignItems="center" flex="1" justifyContent="center" paddingRight={20}>
        <TextInfo title="First Name" value={user.firstname} />
        <TextInfo title="Last Name" value={user.lastname} />
        <TextInfo title="Email" value={user.email} />
        <TextInfo title="Web Site" value={user.website} />
      </Stack>
    </Stack>
  );
};

export default UserListItem;
