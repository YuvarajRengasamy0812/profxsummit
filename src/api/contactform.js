import { contactform } from "./endpoints";
import { postApi } from "./post";

export const postContactForm = (payload) => {
  return postApi(contactform, payload);
};
