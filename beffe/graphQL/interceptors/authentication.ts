import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../utils/constants";
import { JwtPayload, JWTUser } from "../utils/types";

export const authenticateRequest = (req, res) => {
  let user : JWTUser | undefined = undefined
  try {
    if (req.headers["auth"]) {
      const token = verify(req.headers["auth"], JWT_SECRET) as JwtPayload
      user = token.data;
    }
  } catch (e) {
    console.log(e);
  }
  //console.log(user)
  return user;
};
