import { Stack } from "@chakra-ui/react";
import React from "react";
import User from "../../../models/User";
import { UserListItem } from "../../../components";

interface Props {
  users: User[];
}

const userList: React.FC<Props> = ({ users }) => {
  return (
    <Stack direction="column" margin={5} paddingX={10}>
      {users.map((user) => (
        <UserListItem key={user.uuid} user={user} />
      ))}
    </Stack>
  );
};

export default userList;
