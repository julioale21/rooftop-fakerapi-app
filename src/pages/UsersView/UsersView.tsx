import React, { useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { Pagination, UserList } from "../../components";
import axios from "axios";
import User from "../../models/User";

const usersURL = "https://fakerapi.it/api/v1/users?_quantity=100";

const UsersView: React.FC = () => {
  const [paginatedUsers, setPaginatedUsers] = useState<User[]>([]);
  const [usersPerPage] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(usersURL);
        const usersList: User[] = response.data.data;
        const paginatedUsers: User[] = usersList.slice(offset, offset + usersPerPage);

        setPaginatedUsers(paginatedUsers);
        setPageCount(Math.ceil(usersList.length / usersPerPage));
        setCurrentPage(offset / usersPerPage);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        setPaginatedUsers([]);
      }
    };

    fetchUsers();
  }, [offset, usersPerPage]);

  const handleNextPage = () => {
    setOffset(offset + usersPerPage);
  };

  const handlePrevPage = () => {
    setOffset(offset - usersPerPage);
  };

  return (
    <Stack>
      <Text fontSize="2.5rem" marginY={10}>
        User List
      </Text>
      <UserList users={paginatedUsers} />
      {paginatedUsers.length && (
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

export default UsersView;
