import React from "react";
import { Stack } from "@chakra-ui/react";
import { UserList } from "../../components";
import axios from "axios";
import User from "../../models/User";

const baseURL = "https://fakerapi.it/api/v1/";

const UsersView: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([] as User[]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(baseURL + "users");
      const users: User[] = response.data.data;

      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <Stack>
      <UserList users={users} />
    </Stack>
  );
};

export default UsersView;
