import { AuthenticationError } from "apollo-server";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../../utils/constants";
import { users } from "../../utils/usersDB";

export const login = (parent, { name, password }, context) => {
  const user = users.find(
    (user) => user.name === name && user.password === password
  );
  if (user) {
    return sign({ data: { id: user.id, name: user.name } }, JWT_SECRET, {
      expiresIn: "1h",
    });
  } else {
    throw new AuthenticationError("Invalid Credentials");
  }
};
