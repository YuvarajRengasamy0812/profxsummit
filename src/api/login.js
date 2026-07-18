import { Login } from "./endpoints";
import { postApi } from "./post";

export const LoginForm = (payload) => {
  return postApi(Login, payload);
};
