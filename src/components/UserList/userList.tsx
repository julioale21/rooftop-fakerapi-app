import React from "react";
import User from "../../models/User";

interface Props {
  users: User[];
}

const userList: React.FC<Props> = ({ users }) => {
  return <div></div>;
};

export default userList;
